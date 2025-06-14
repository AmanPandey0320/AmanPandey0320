
const color = {
    blue: '#2664eb',
    white: '#ffffff',
    grey: '#9ca3af',
    darkerGrey: '#262626',
    darkBlue: '#0000ff',
    lightBlue: '#dbeafe'
}
const filledBlueLink = {
    backgroundColor: color.blue,
    color: color.white,
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '0.375rem',
    borderStyle: 'none',
    "&:hover": {
        backgroundColor: color.darkBlue,
        cursor: 'pointer'
    }
}

const outlinedTransparentLink = {
    color: color.darkerGrey,
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '0.375rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    "&:hover": {
        color: color.darkBlue,
        cursor: 'pointer'
    }
}

const outlineBlueLink = {
    color: color.blue,
    fontWeight: 600,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '0.375rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: color.blue,
    "&:hover": {
        color: color.darkBlue,
        cursor: 'pointer'
    }
}

const sectionHeaderText = {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    '@media (min-width: 768px)': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem'
    }
};

const sectionHeaderUnderline = {
    backgroundColor: color.blue,
    width: '5rem',
    height: '0.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem'

}



// page specific styles
const home = {
    outlinedTransparentLink,
    filledBlueLink,
    introTextStyle: {
        fontFamily:'var(--font-roboto)',
        maxWidth: '32rem',
        color: color.darkerGrey,
        lineHeight: '1.5'
    },
    positionStyle: {
        color: color.blue,
        fontSize: '1.5rem',
        fontWeight:600,
        lineHeight: '2',
        "@media (max-width: 600px)": {
            fontSize: '1.25rem'
        }
    },
    nameStyle: {
        fontWeight: 700,
        color: color.white,
        fontSize: '3.75rem',
        lineHeight: '1',
        "@media (max-width: 600px)": {
            fontSize: '2.75rem'
        }
    },
    helloStyle: {
        fontWeight: 700,
        color: color.blue,
        fontSize: '3.75rem',
        lineHeight: '1',
        "@media (max-width: 600px)": {
            fontSize: '2.75rem'
        }
    },
    boxStyle: {
        minHeight: 'fit-content',
        height: '100vh',
        background: `linear-gradient(0deg,${color.white} , #cfddfa)`,
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
        borderColor: color.blue,
        borderWidth: '4px'
    }

}


const about = {
    sectionHeaderText,
    sectionHeaderUnderline,
    filledBlueLink,
    outlineBlueLink,
    boxStyle: {
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: color.white,

    },
    sweText: {
        color: "#1f2937",
        fontSize: "1.5rem",
        lineHeight: "2rem",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        fontWeight: 700
    }
}

const skills = {
    sectionHeaderText,
    sectionHeaderUnderline,
    paperStyle:{
        padding:'1rem',
        paddingLeft:'2rem',
        paddingRight:'2rem'
    }
}

const experience = {
    sectionHeaderText,
    sectionHeaderUnderline,
}

const education = {
    ...experience,
    subHeadingText:{
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: 700,
        color: color.darkerGrey
    }
}

export { home, about, color, skills, experience, education }