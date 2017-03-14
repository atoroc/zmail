const brandColor = '#ff4e31'

export default {
    width: '560px',
    fontFamily: "'Proxima Nova Soft','Proxima Nova','Avenir','Helvetica Neue','Helvetica',Arial,sans-serif",
    fontSize: '14px',
    brandColor: brandColor,

    logo: {
        src: 'https://s3.amazonaws.com/lumi-assets/lumi-200bk.png'
    },

    h1: {
        margin: 0,
        padding: 0,
        fontFamily: "'Proxima Nova Soft','Proxima Nova','Avenir','Helvetica Neue','Helvetica',Arial,sans-serif",
        lineHeight: '1.3',
        marginBottom: '15px',
        color: '#222',
        fontWeight: '200',
        fontSize: '37px',
        textAlign: 'center',
    },

    link: {
        color: brandColor
    },

    button: {
        margin: 0,
        padding: '15px 25px',
        // fontFamily: this.fontFamily,
        textDecoration: 'none',
        backgroundColor: '#ff4e31',
        borderRadius: '4px',
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        textAlign: 'center',
        display: 'inline-block',
        color: '#fff',
    },

    paragraph: {
       margin: 0,
       padding: 0,
       fontFamily: "Proxima Nova Soft, Proxima Nova, Avenir, Helvetica Neue, Helvetica, Arial, sans-serif",
       marginBottom: '7px',
       fontWeight: 'normal',
       fontSize: '14px',
       lineHeight: '1.6',
    },

    table: {
        borderTop: '1px solid #e9e9e6',
    },

    tableData: {
        height: '50px',
        verticalAlign: 'middle',
        borderBottom: '1px solid #e9e9e6'
    }
}
