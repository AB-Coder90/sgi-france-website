import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [useFallback, setUseFallback] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadStart = () => {
      setLoadingProgress(0)
      setError(null)
      console.log("Video loading started")
    }

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const progress = (video.buffered.end(0) / video.duration) * 100
        setLoadingProgress(Math.round(progress))
        console.log(`Loading progress: ${progress}%`)
      }
    }

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      setError(null)
      console.log("Video loaded successfully")
      
      // Afficher d'abord le contenu avec un délai initial
      setTimeout(() => {
        setShowContent(true)
        
        // Puis afficher la vidéo après 3 secondes
        setTimeout(() => {
          setShowVideo(true)
        }, 3000)
      }, 500)
    }

    const handleError = () => {
      console.error("Video loading error")
      setError(`Erreur de chargement (tentative ${retryCount + 1}/3)`)
      
      if (retryCount < 2) {
        setRetryCount(prev => prev + 1)
        video.load() // Retry loading
      } else {
        setUseFallback(true)
      }
    }

    video.addEventListener("loadstart", handleLoadStart)
    video.addEventListener("progress", handleProgress)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadstart", handleLoadStart)
      video.removeEventListener("progress", handleProgress)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [retryCount])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {!useFallback ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms]"
            style={{ opacity: showVideo ? 1 : 0 }}
          >
            <source src="/models/hero-video.webm" type="video/webm" />
            <source src="/models/hero-video.mp4" type="video/mp4" />
          </video>

          {!isVideoLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]/80 backdrop-blur-sm">
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-4 text-white/70 text-sm">
                {error || `Chargement ${loadingProgress}%`}
              </p>
            </div>
          )}
        </>
      ) : (
        <img
          src="/models/hero-fallback.jpg"
          alt="SGI France"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 backdrop-blur-[2px] transition-opacity duration-[3000ms]"
           style={{ opacity: showVideo ? 1 : 0 }} />

      <div className={`relative container h-full flex flex-col items-center justify-center gap-8 transition-all duration-[1500ms] transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-display font-bold text-center w-full max-w-4xl">
          SGI : L'expert en pulvérisation, pour toutes industries
        </h1>
        <p className="max-w-[600px] text-lg sm:text-xl text-white/80 text-center">
          Optimisez vos processus avec nos solutions de pulvérisation sur mesure
        </p>
      </div>

      {!useFallback && isVideoLoaded && (
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-8 right-8 border-white/10 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-opacity duration-[3000ms]"
          onClick={toggleMute}
          style={{ opacity: showVideo ? 1 : 0 }}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isMuted ? "Activer le son" : "Désactiver le son"}
          </span>
        </Button>
      )}
    </div>
  )
}
