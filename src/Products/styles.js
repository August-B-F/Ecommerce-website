const styles = (theme) => ({
  toolbar: {
      minHeight: '56px',
      '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: '48px',
      },
      '@media (min-width:600px)': {
          minHeight: '64px',
      },
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#fff', 
    padding: '24px',
  },
  root: {
    flexGrow: 1,
  },
});

export default styles;