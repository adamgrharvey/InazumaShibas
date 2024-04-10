import '../CSS/LightningBolt.css'

export default function LightningBolt(props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="svg-container">
  <div id="outerWrapper" class="ghosted">
    <svg class="lightning-container" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="-243.6 360 41.6 73.7">
      <style>
        .st0{clip - path:url(#SVGID_2_);fill: none;}
      </style>
      <defs>
        <path id="SVGID_1_" class="stroke" d="M-202.4 362.5c.6-1 .3-1.7-.5-2.2-.7-.4-1.6-.3-2.2.7l-30.9 38.2c-.1.1-.1.1-.1.2l-.1.1c-.2.3-.2.6-.1.8.1.6.8.8 1.7.9h7.6c1.5-.1 2.2.8 1.6 1.8l-17.3 28.5c-.6 1-.3 1.7.5 2.2.7.4 1.5.2 2.2-.7l30.9-38.2c.1-.1.1-.1.1-.2l.1-.1c.2-.3.2-.6.1-.8-.1-.6-.8-.8-1.7-.9l-7.5-.1c-1.5.1-2.2-.8-1.6-1.8l17.2-28.4" />
      </defs>
      <clipPath id="SVGID_2_"><use xlink: href="#SVGID_1_" overflow="visible" /></clipPath><path id="path" class="st0 lightning stroke" d="M-202.9 360.3L-229 397h13l-26.2 36.5" /></svg>
  </div>
</div>`,
      }}
    />
  )
}
