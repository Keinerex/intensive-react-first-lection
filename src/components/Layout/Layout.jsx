export const Layout = (props) => {
    return <div>
        <header>header</header>
        <div>
            { props.children }
        </div>
        <footer>footer</footer>
    </div>
}
