"use client"

const img1 = "https://www.figma.com/api/mcp/asset/c0c1ba40-5758-4db9-9af9-40b84fa73617"

export function PanelImageDouble() {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-6 md:gap-12 h-auto md:h-[478px] items-start opacity-80 p-4 md:p-16 w-full">
      <div 
        className="flex-1 h-[200px] md:h-full shrink-0 w-full md:w-auto" 
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)" 
        }} 
      />
      <div className="flex-1 h-[200px] md:h-full relative shrink-0 w-full md:w-auto">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e3e3e3] inset-0" />
          <img 
            alt="" 
            className="absolute max-w-none object-[50%_50%] object-cover opacity-20 size-full" 
            src={img1} 
          />
          <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  )
}

