
import React from 'react';
import CarouselData from './CarouselContents'
import CarouselImage from './x.jpg'


class Carousel extends React.Component{

    render() {
        return (
            <div>
                <div className="Carousel">
                    <div id="carouselComponent" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.addCarouselIndıcators()}
                        </ol>
                        <div className="carousel-inner">
                            {this.addCarouselItems()}
                        </div>
                        <a className="carousel-control-prev" href="#carouselComponent" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselComponent" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    addCarouselIndıcators(){
        var arr=[];
        CarouselData.data.map((item,index)=>{
            if(index===0){
                arr.push(<li data-target="#carouselComponent"  className="active indicatorItem" data-slide-to={index}></li>);
            }else{
                arr.push(<li data-target="#carouselComponent" className="indicatorItem" data-slide-to={index} ></li>);
            }
        });
        return arr;
    }

    addCarouselItems(){
        var arr=[];
        CarouselData.data.map((item,index)=>{
            if(index===0){
                arr.push(
                    <div className="carousel-item active">
                        <img src={CarouselImage} className="d-block w-100" alt="altText"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            }else{
                arr.push(
                    <div className="carousel-item">
                        <img src={CarouselImage} className="d-block w-100" alt="altText"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            }

        });
        return arr;
    }
}


export default Carousel ;
