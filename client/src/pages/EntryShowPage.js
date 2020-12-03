import React, { useState, useEffect } from 'react'
import EntryModel from '../models/entry';
import EntryForm from '../components/EntryForm';

const EntryShowPage = (props) => {
  const [entry, setEntry] = useState('');
  useEffect(() => {
    // EntryModel.byId(props.match.endPoint.split('/')[2]).then((res) => {
    //   console.log(res.data.entry);
    //   const {entry} = res.data
    //   setEntry(<EntryForm entry={entry} />)
    // })
  }, []);

  return (
    <div>
      <h1>Party Show Page</h1>
      {entry}
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  )

}

export default EntryShowPage;
// import React, { useState, useEffect } from 'react'
// import EntryCard from '../components/EntryCard'
// import EntryModel from '../models/entry';

// const EntryShowPage = (props) => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [when, setWhen] = useState('');

//   useEffect(() => {
//     EntryModel.byId().then((response) => {
//       const { name } = response.data
//       console.log(name);
//       const showName = name.map((entry, index) => {
//         return <EntryCard entry = { entry } key = { index } />
//       })

//       setName(showName)

//     })
    
//     return(
//       <div>
//         <div>{ name }</div>
//       </div>
//     )

//   })

// }

// export default EntryShowPage;