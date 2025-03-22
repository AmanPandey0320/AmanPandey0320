const filledBlueLink = {
    backgroundColor: '#2664eb',
    color: '#ffffff',
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '0.375rem',
    borderStyle: 'none',
    "&:hover": {
        backgroundColor: '#0000ff',
        cursor: 'pointer'
    }
}

const outlinedTransparentLink = {
    color: '#9ca3af',
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '0.375rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    "&:hover": {
        color: '#ffffff',
        cursor: 'pointer'
    }
}
const home = {
    outlinedTransparentLink,
    filledBlueLink,
    introTextStyle: {
        maxWidth: '32rem',
        color: '#9ca3af',
        lineHeight: '1.5'
    },
    positionStyle: {
        color: '#ffffff',
        fontSize: '1.5rem',
        lineHeight: '2',
        "@media (max-width: 600px)": {
            fontSize: '1.25rem'
        }
    },
    nameStyle: {
        fontWeight: 700,
        color: '#ffffff',
        fontSize: '3.75rem',
        lineHeight: '1',
        "@media (max-width: 600px)": {
            fontSize: '2.75rem'
        }
    },
    helloStyle: {
        fontWeight: 700,
        color: '#2664eb',
        fontSize: '3.75rem',
        lineHeight: '1',
        "@media (max-width: 600px)": {
            fontSize: '2.75rem'
        }
    },
    boxStyle: {
        minHeight: 'fit-content',
        height: '100vh',
        backgroundColor: '#262626',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        "@media (max-width: 1100px)": {
            height: 'fit-content',
            paddingBottom: '3rem'
        }
    },
    imageStyle: {
        width: '20rem',
        height: '20rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10rem',
        borderStyle: 'solid',
        borderColor: '#2664eb',
        borderWidth: '4px'
    }

}

export { home }