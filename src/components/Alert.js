import React from 'react'

function Alert(props) {
    // console.log(`${props.alert}`);
    // console.log("Hello");

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {/* setTimeout(() => { */}
            <strong> {capitalize(props.alert.type)} : {props.alert.msg} </strong>
        {/* }, 1000); */}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}

export default Alert