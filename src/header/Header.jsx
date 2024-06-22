import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm"> Snippets & Poems</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" 
        src="https://loremflickr.com/640/360" 
        alt=""/>
    </div>
  )
}
