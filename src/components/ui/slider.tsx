import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface SliderProps extends SliderPrimitive.SliderProps {
  label?: string;
  error?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-muted-foreground">
          {label}
        </label>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          error ? 'text-red-500' : 'text-primary',
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            "relative h-1.5 w-full grow overflow-hidden rounded-full",
            error ? 'bg-red-500/20' : 'bg-card/50',
            "before:absolute before:h-full before:w-full",
            error ? 'before:bg-red-500/10' : 'before:bg-primary/10'
          )}
        >
          <SliderPrimitive.Range
            className={cn(
              "absolute h-full",
              error ? 'bg-red-500' : 'bg-primary'
            )}
          />
        </SliderPrimitive.Track>
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              "block h-4 w-4 rounded-full",
              "border-2",
              error ? 'border-red-500 bg-background' : 'border-primary/50 bg-background',
              "ring-offset-background transition-colors focus-visible:outline-none",
              error
                ? 'focus-visible:ring-red-500 focus-visible:ring-offset-2'
                : 'focus-visible:ring-primary focus-visible:ring-offset-2',
              "disabled:pointer-events-none disabled:opacity-50",
              "hover:border-primary hover:bg-primary/10"
            )}
          />
        ))}
      </SliderPrimitive.Root>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Slider.displayName = 'Slider';

export { Slider };
