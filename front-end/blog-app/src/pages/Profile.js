import React from 'react';
import './Profile.css'


const Profile = () => {
    return (
       
       <>
       
        <div className="container main-secction">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 image-section">
                <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg" />
            </div>
            <div className="row user-left-part">
                <div className="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
                    <div className="row ">
                        <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                            <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" className="rounded-circle" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                            <button id="btn-contact"  data-toggle="modal" data-target="#contact" className="btn btn-success btn-block follow">Contactarme</button> 
                            <button className="btn btn-warning btn-block">Descargar Curriculum</button>                               
                        </div>
                        <div className="row user-detail-row">
                            <div className="col-md-12 col-sm-12 user-detail-section2 pull-left">
                                <div className="border"></div>
                                <p>FOLLOWER</p>
                                <span>320</span>
                            </div>                           
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                    <div className="row profile-right-section-row">
                        <div className="col-md-12 profile-header">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                                    <h1>Juan Perez</h1>
                                    <h5>Developer</h5>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth">
                                    <a href="/search" className="btn btn-primary btn-block">Seguir buscando</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                        <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                  <a className="nav-link active" href="#profile" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i> Perfil Profesional</a>
                                                </li>
                                                <li className="nav-item">
                                                  <a className="nav-link" href="#buzz" role="tab" data-toggle="tab"><i className="fas fa-info-circle"></i> Información Detallada</a>
                                                </li>                                                
                                              </ul>
                                              
                                              <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane fade show active" id="profile">
                                                        <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>ID</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>509230671</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Nombre</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Juan Perez</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Email</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>juanp@gmail.com</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Teléfono</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>12345678</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Profesion</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Developer</p>
                                                                </div>
                                                            </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="buzz">
                                                        <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Experience</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Expert</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Hourly Rate</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>10$/hr</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Total Projects</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>230</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>English Level</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Expert</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Availability</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>6 months</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <label>Your Bio</label>
                                                                    <br/>
                                                                    <p>Your detail description</p>
                                                                </div>
                                                            </div>
                                                </div>
                                                
                                              </div>
                          
                                </div>
                                <div className="col-md-4 img-main-rightPart">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row image-right-part">
                                                <div className="col-md-6 pull-left image-right-detail">
                                                    <h6>PUBLICIDAD</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="http://camaradecomerciozn.com/" >
                                            <div className="col-md-12 image-right">
                                                <img src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" />
                                            </div>
                                        </a>
                                        <div className="col-md-12 image-right-detail-section2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="contact">Contactarme</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <p for="msj">Se enviará este mensaje a la persona que desea contactar, indicando que te quieres comunicar con el. Para esto debes de ingresar tu información personal.</p>
                    </div>
                    <div className="form-group">
                        <label for="txtFullname">Nombre completo</label>
                        <input type="text" id="txtFullname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="txtEmail">Email</label>
                        <input type="text" id="txtEmail" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="txtPhone">Teléfono</label>
                        <input type="text" id="txtPhone" className="form-control" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary"  data-dismiss="modal">Guardar</button>
                </div>
            </div>
        </div>
    </div>
    </>
   

    );
};


export default Profile;

