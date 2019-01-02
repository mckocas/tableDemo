import React, { Component } from 'react';
import {Button,Input} from 'karcin-ui';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name:'Mehmet Can',
          surname:'Kocas',
          in: 56516728808,
        },
      ],
      temp:{
        name: "",
        surname: "",
        in: -1,
      },
      addModal:false,
      updateModal: false,
      currentUser: -1,
    }

    this.addToggle = this.addToggle.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  handleChange = (e) => {
    let state = this.state.temp;
    state[e.target.name] = e.target.value;
    this.setState(state);
}

  updateToggle() {
    this.setState({
      updateModal: !this.state.updateModal,
    });
    if(this.state.updateModal === true){
      this.setState({
        temp:{
          name: "",
          surname: "",
          in: -1,
        }        
      })
    }
  }

  updateNew(k,n,s,i){
    let updatedUser = {
      name: n,
      surname: s,
      in: i,
    }
    this.setState({currentUser : k,
    temp: updatedUser});
    this.updateToggle();
  }

  updateUser(){
    let updatedUser = this.state.temp;
    let users = this.state.users;
    if(this.isINumberValid(updatedUser.in) === false){
      alert("Geçerli bir TCK No girin.");
      return false;
    }else if(this.isOnlyChar(updatedUser.name) === false || this.isOnlyChar(updatedUser.surname) === false){
      alert("İsim ya da Soyisim geçersiz.(Numara ya da türkçe karakter olmadan giriniz.)")
      return false;
    } 
    else{
      users[this.state.currentUser] = updatedUser;
      this.setState({
      users:users,
      temp:{
          name: "",
          surname: "",
          in: -1,
        }});
    }
    this.updateToggle();
  }

  addToggle() {
    this.setState({
      addModal: !this.state.addModal,
      temp:{
        name: "",
        surname: "",
        in: -1,
      }
    });
  }

  addUser(){
    let newUser = this.state.temp;
    let usersCopy = this.state.users.concat(newUser);

    if((this.state.temp.in === -1 || this.state.temp.name === "" || this.state.temp.surname === "")){
      alert("Boş bırakmayın.")
      return false;
    }
    else if(this.isINumberValid(this.state.temp.in) === false){
      alert("Geçerli bir TCK No girin.")
      return false;
    }
    else if(this.isOnlyChar(newUser.name) === false || this.isOnlyChar(newUser.surname) === false){
      alert("İsim ya da Soyisim geçersiz.(Numara ya da türkçe karakter olmadan giriniz.)")
      return false;
    } 
    else{
      this.setState({users: usersCopy,
      temp:{
        name: "",
        surname: "",
        in: -1,
      }})
    }
    this.addToggle();

  }

  deleteUser(key){
    let users = this.state.users;
    users.splice(key, 1);
    this.setState({users:users});
  }

  isOnlyChar(value){
    value = String(value);
    if(!/^[a-zA-Z]+$/.test(value)) return false;
    else return true;
  }

  //isINumberValid functionu için https://gist.github.com/onury/7a380f906b1eb46dc2f0bb089caf7d12 adresinden yararlanılmıştır.
  
  isINumberValid(value) {
    value = String(value);
    // T.C. identity number should have 11 digits and first should be non-zero.
    if (!(/^[1-9]\d{10}$/).test(value)) return false;
    var digits = value.split(''),
        // store last 2 digits (10th and 11th) which are actually used for validation
        d10 = Number(digits[9]),
        d11 = Number(digits[10]),
        // we'll also need the sum of first 10 digits for validation
        sumOf10 = 0,
        evens = 0,
        odds = 0;
    digits.forEach(function (d, index) {
        d = Number(d);
        if (index < 10) sumOf10 += d;
        if (index < 9) {
            if ((index + 1) % 2 === 0) {
                evens += d;
            } else {
                odds += d;
            }
        }
    });
    // check if the unit-digit of the sum of first 10 digits equals to the 11th digit.
    if (sumOf10 % 10 !== d11) return false;
    // check if unit-digit of the sum of odds * 7 and evens * 9 is equal to 10th digit.
    if (((odds * 7) + (evens * 9)) % 10 !== d10) return false;
    // check if unit-digit of the sum of odds * 8 is equal to 11th digit.
    if ((odds * 8) % 10 !== d11) return false;
    return true;
  }

  render() {
    return (
      <div className="App">
        <Button color="primary" className='addButton' size="lg" block onClick={this.addToggle}>Yeni kayıt eklemek için tıklayınız.</Button>
        <Modal isOpen={this.state.addModal} toggle={this.addToggle} className={this.props.className}>
            <ModalHeader toggle={this.addToggle}>Yeni</ModalHeader>
            <ModalBody>
              <Input type="text" icon="fa-check" id="uN" IconColor={'primary'} name="name" placeholder='isim' onChange={this.handleChange} required/>
              <Input type="text" icon="fa-check" id="uS" IconColor={'primary'} name="surname" placeholder='soyisim' onChange={this.handleChange}/>
              <Input type="text" icon="fa-check" id="uI" IconColor={'primary'} name="in" placeholder='tck no' onChange={this.handleChange}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addUser}>Ekle</Button>
              <Button color="secondary" onClick={this.addToggle}>Vazgeç</Button>
            </ModalFooter>
        </Modal>
        <table>
          <thead>
            <tr className='tableHeader'>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>TCK No</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((data,i)=>{return (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.surname}</td>
              <td>{data.in}</td>
              <td className='addDeleteBts'>
                <Button className='deleteBt' onClick={() => this.deleteUser(i)} color="danger">Sil</Button>

                <Button className='updateBt' onClick={() => this.updateNew(i,data.name,data.surname,data.in)} color="info">Değiştir</Button>
                <Modal isOpen={this.state.updateModal} toggle={this.updateToggle} className={this.props.className}>
                  <ModalHeader toggle={this.updateToggle}>Güncelle</ModalHeader>
                  <ModalBody>
                    <Input type="text" icon="fa-check" id="uN" IconColor={'primary'} name="name" placeholder={this.state.temp.name} onChange={this.handleChange} requireText/>
                    <Input type="text" icon="fa-check" id="uS" IconColor={'primary'} name="surname" placeholder={this.state.temp.surname} onChange={this.handleChange} requireText/>
                    <Input type="text" icon="fa-check" id="uI" IconColor={'primary'} name="in" placeholder={this.state.temp.in} onChange={this.handleChange} requireText/>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.updateUser}>Güncelle</Button>
                    <Button color="secondary" onClick={this.updateToggle}>Vazgeç</Button>
                  </ModalFooter>
                </Modal>
              </td>
              </tr>
          )})}
          </tbody> 
        </table>
      </div>
    );
  }
}

export default App;