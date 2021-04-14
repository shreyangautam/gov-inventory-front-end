export const sideBarNavBorderTop = () => {
    return(
        <div class="absolute right-0 w-8 h-10 z-0">
        <div class="bg-gray-100 w-full h-full custom"></div>
        <div class="bg-primary w-full h-full custom z-20 rounded-br-full"></div>
        </div>
    )
}

export const sideBarNavBorderBottom = () => {
    return(
        <div class="absolute inline-block right-0 bg-white w-8 h-10 z-0">
        <div class="bg-gray-100 w-full h-full"></div>
        <div class="bg-primary w-full h-full custom rounded-tr-full"></div>
        </div>
    )
} 