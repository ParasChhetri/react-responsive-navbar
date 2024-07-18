import './Home.css';
import programmerSVG from '../../assets/images/Animation - 1718438760767.gif';
const Home = () => {
    return (
        <>
            <div className='home-heading-div'>
                <h1 className='home-heading center-text'>The <span className=''>expert</span> in everything was once a <span className=''>beginner</span>
                </h1>
            </div>
            <div className='home-div'>
                <div className='left-side'>
                    <img src={programmerSVG} alt='programmer gif' height={300}/>
                </div>
                <div className='right-side'>
                    <h1>This is right side</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate facere magnam nihil ipsum nostrum pariatur omnis! Voluptas perspiciatis corporis, totam esse quasi facilis delectus omnis odio tempore eaque tempora corrupti illum est doloremque praesentium, beatae numquam dolores qui! In dolore minus esse. Quam iste ut id, mollitia eius nemo.</p>
                </div>
            </div>
        </>
    );
}

export default Home;