import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <div className="w-screen h-[72px] flex items-center justify-center gap-4">
            <img src={Logo} />
        </div>
    )
}
