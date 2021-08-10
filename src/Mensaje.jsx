const Mensaje = ({ titulo, subtitulo, description }) => {
    return ( 
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h3>{description}</h3>
        </>
    );
}
 
export default Mensaje;