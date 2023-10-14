import './Filter.css'

export const Filter = () => {

    return (
        <>
    <div className='containerFilter'>
            <div className="filter">
                
                <div>
                   <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_110_1196"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_110_1196)">
                            <path d="M11 21V15H13V17H21V19H13V21H11ZM3 19V17H9V19H3ZM7 15V13H3V11H7V9H9V15H7ZM11 13V11H21V13H11ZM15 9V3H17V5H21V7H17V9H15ZM3 7V5H13V7H3Z" fill="#1C1B1F" />
                        </g>
                    </svg>
                </span>  
                </div>

                <div>
                    <span className="titleFilter">
                    Filtros
                </span>  
                </div>
               
              
            </div>
            </div>


        </>
    )


}