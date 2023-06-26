import React from 'react';

const Cat = ({name,origin,length,image,family_friendly,life_expectancy,meowing,max_weight,grooming}) => {
    return(
        <div class="container">
            <h2>{name}</h2>
            <div className="inner-container">
                <div class="image-container">
                    <img src={image} alt="" />
                </div>
                <div class="description-container">
                    <div className="description-left">
                        <p>Origin:</p>
                        <p>Length:</p>
                        <p>Family friendly:</p>
                        <p>Life expectancy:</p>
                        <p>Meowing:</p>
                        <p>Max weight:</p>
                        <p>Grooming:</p>
                    </div>
                    <div className="description-right">
                        <p>{origin}</p>
                        <p>{length}</p>
                        <p>{family_friendly} (0-5)</p>
                        <p>{life_expectancy} years</p>
                        <p>{meowing} (0-5)</p>
                        <p>{max_weight*0.45} kg</p>
                        <p>{grooming} (0-5)</p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}
export default Cat;
