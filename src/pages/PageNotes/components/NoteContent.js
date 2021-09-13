import moment from "moment";

const NoteContent = function ({note:{id, date, title, msg}={}}) {

  return <>
    <div>{id}</div>
    <div>{!!date ? moment(date).format("YYYY/MM/DD_HH:mm:ss.SSS") : ''}</div>
    <div>{title}</div>
    <div>{msg}</div>
  </>
}

export default NoteContent;