import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            viewBox="0 0 140 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-foreground h-5 w-auto', className)}>
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
            />
            <path
                d="M27.5 2.5V14.5H25.5V2.5H27.5ZM29.5 5V14.5H27.5V5H29.5ZM32.5 7.5V9.5H31.5V12.5H33.5V14.5H29.5V7.5H32.5ZM36.5 5V14.5H34.5V7H33.5V5H36.5ZM39.5 7V14.5H37.5V9H36.5V7H39.5ZM46 5V7H42V9H45V11H42V12.5H46V14.5H40V5H46ZM50 5C51.5 5 52.5 5.5 53 6.5C53.5 7.5 53.5 8.5 53 9.5L50 12.5H53V14.5H47V12.5L50 9.5C50.5 9 50.5 8.5 50 8V7H53V5H50ZM59 2.5V14.5H57V2.5H59ZM63 5V14.5H61V7H60V5H63ZM66 7V14.5H64V9H63V7H66ZM73 5V7H69V9H72V11H69V12.5H73V14.5H67V5H73ZM77 5C78.5 5 79.5 5.5 80 6.5C80.5 7.5 80.5 8.5 80 9.5L77 12.5H80V14.5H74V12.5L77 9.5C77.5 9 77.5 8.5 77 8V7H80V5H77ZM86 2.5V14.5H84V2.5H86ZM90 5V14.5H88V7H87V5H90ZM93 7V14.5H91V9H90V7H93ZM100 5V7H96V9H99V11H96V12.5H100V14.5H94V5H100ZM104 5C105.5 5 106.5 5.5 107 6.5C107.5 7.5 107.5 8.5 107 9.5L104 12.5H107V14.5H101V12.5L104 9.5C104.5 9 104.5 8.5 104 8V7H107V5H104ZM113 2.5V14.5H111V2.5H113ZM117 5V14.5H115V7H114V5H117ZM120 7V14.5H118V9H117V7H120ZM127 5V7H123V9H126V11H123V12.5H127V14.5H121V5H127ZM131 5C132.5 5 133.5 5.5 134 6.5C134.5 7.5 134.5 8.5 134 9.5L131 12.5H134V14.5H128V12.5L131 9.5C131.5 9 131.5 8.5 131 8V7H134V5H131Z"
                fill="currentColor"
            />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop
                        offset="1"
                        stopColor="#2BC8B7"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-5', className)}>
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
            />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop
                        offset="1"
                        stopColor="#2BC8B7"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 71 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z"
                fill="none"
                strokeWidth={0.5}
                stroke="currentColor"
            />
        </svg>
    )
}