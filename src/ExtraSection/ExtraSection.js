
import useYoga from '../hooks/useYoga';

const ExtraSection = () => {
    const [yogas, setYogas] = useYoga()
    console.log(yogas);
    return (
        <div className='container'>
            <h1 className='text-center text-success m-4'>Yoga Not Just Fit Your Body! It Heals Your Mind.</h1>
            <div className='row'>
                {yogas.map(yoga =>
                    <div className=' col-md-4 '>
                        <div className='card m-1 shadow p-3'>
                            <img className='img-fluid' src={yoga.img} alt="" />
                            <div className='my-2'>
                                <h3>{yoga.name}</h3>
                                <p>{yoga.description}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ExtraSection;