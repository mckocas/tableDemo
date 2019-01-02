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
          in: 12345678901,
        },
        {
          name:'Murat',
          surname:'Korkmaz',
          in: 65498732156,
        },
        {
          name:'Ayse',
          surname:'Ozturk',
          in: 15975398712,
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
  addToggle() {
    this.setState({
      addModal: !this.state.addModal,
    });
  }

  updateToggle() {
    this.setState({
      updateModal: !this.state.updateModal
    });
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
    users[this.state.currentUser] = updatedUser;
    this.setState({users:users});
    this.updateToggle();
  }

  addUser(){
    let newUser = this.state.temp;
    let usersCopy = this.state.users.concat(newUser);

    //karcin-ui üzerinde required attribute'u olmadığı için böyle basit bir kontrol sistemi yazdım.
    if((this.state.temp.in === -1 || this.state.temp.name === "" || this.state.temp.surname === "")){
      alert("Boş bırakmayın.")
      return false;
    }else{
      this.setState({users: usersCopy,
      temp:{
        name: "",
        surname: "",
        in: -1,
      }})
    }
    this.addToggle();
    console.log(this.state.temp);

  }
  deleteUser(key){
    let users = this.state.users;
    users.splice(key, 1);
    this.setState({users:users});
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
/*




*/