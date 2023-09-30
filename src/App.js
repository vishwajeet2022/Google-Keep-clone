import React, {  useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [Item, SetItem] = useState([]);
  
  /*useEffect((note)=>{
    alert('Note Created');
  }, [])*/

  const addNote = (note) => {
    SetItem((preData) => {
      return [...preData, note];
    });

    console.log(note);
  };

 /*const onDownload=(id)=>{
    SetItem((oldData) => 
    oldData.filter((curData, index) => {
      return index!==id;
    })
  )}*/

  const onDelete = (id) => {
    SetItem((oldData) => 
      oldData.filter((curData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {Item.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            //downloadPDF={onDownload}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;
