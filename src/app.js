import React, { Component} from "react";
import Modal from './component/Modal.js';
import "./index.css";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
              modal: false,
              collapse: false, 
              img: "../img/note9.png",
              title: "Samsung Galaxy Note 9",
              store: "elevenia Store",
              rating:"5",
              successTransaction: "100",
              description: "Samsung Galaxy Note9 merupakan smartphone dengan layar 6.4 Inch beresolusi 2960 x 1440 (Quad HD+) 516ppi. Smartphone ini dibekali dengan sistem operasi Android 8.1 (Oreo), 64bit dan prosesor Exynos 9810 Octa-Core (2.7GHz Quad + 1.7GHz Quad), 64bit, 10nm.",
              specification: "Jumlah Slot :Dual SIM model(Hybrid SIM slot): one Nano SIM and one Nano SIM or one MicroSD slot (up to 400gb)",
              specDetail: "Display 6.4 Inch Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 516 ppi, 18:5:9 Corning Gorilla Glass 5.",
              price:"14.350.000",
              priceAfterDisc:"12.600.000"
            };
        this.toggleModal = this.toggleModal.bind(this);
        this.collapse = this.collapse.bind(this);
    }

    toggleModal(){
        this.setState({
            modal: !this.state.modal
        });
      }

    collapse(){
        this.setState({
            collapse: !this.state.collapse
        });
    }

  render(){
    return(
      <div>
        <div className="logo">
         <a href="https://www.elevenia.co.id">
          <img src="../img/logo.png"/></a>
        </div>
        <div className="popup-btn" onClick={this.toggleModal}>POPUP BUTTON</div>

        <Modal show={this.state.modal} onClose={this.toggleModal}> 
            <img style={{objectFit: 'cover', width:'100%'}} src={this.state.img}/>  
            <div className="detail-cont">
            <div onClick={this.toggleModal}><i className="fa fa-times close"></i> </div>
              <h1 className="title">{this.state.title}</h1>
              <div style={{color:'#666666'}}>{this.state.store}</div>
              <div className="rating-cont">
                <div className="rating"> <i style={{color:'#ffcc00'}} className="fa fa-star"></i> {this.state.rating} STARS </div>
                <div className="success-trans">Transaksi berhasil : {this.state.successTransaction}%</div>
              </div>
              <div className="description">{this.state.description}</div>
              <div onClick={this.collapse} style={{ cursor: 'pointer' }}>
                <div className="specification">Spesifikasi
                    {this.state.collapse && <i className="fa fa-angle-down arrow"></i>}
                    {!this.state.collapse && <i className="fa fa-angle-up arrow"></i>}
                </div>
                {this.state.collapse &&
                <div>
                  <div className="spec">{this.state.specification}</div>
                  <div className="spec-detail">{this.state.specDetail}</div>
                </div>
                }
             </div>
             <div className="buy-cont">
                <div className="price-cont">
                  <div style={{fontWeight:'bold', fontSize: '18px'}}>Harga</div>
                  <div className="price">{this.state.price}</div>
                  <div className="price-after">Rp. {this.state.priceAfterDisc}</div>
                </div>
                <div className="btn-cont">
                <a href="http://www.elevenia.co.id/search?q=samsung+galaxy+note+9&lCtgrNo=">
                 <div className="buy-btn">
                 Beli Sekarang</div>
                 </a>
                </div>
             </div>
            </div> 
        </Modal>
      </div>
    );
  }
}

export default App;