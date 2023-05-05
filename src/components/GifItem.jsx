
export const GifItem = ({title, url, id}) => {
    // console.log(url, title, id);
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
