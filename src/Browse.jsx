import React from 'react'
import './Browse.css'
import { Stethoscope } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bone } from 'lucide-react';
import { Venus } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Baby } from 'lucide-react';
import { Smile } from 'lucide-react';
import { Rose } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { CalendarHeart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Award } from 'lucide-react';
import { Shield } from 'lucide-react';
export default function Browse() {
  return (
    <div>
      <section className="container">
        <h1 className="header"> Browse by Speciality</h1>
        <p className="header-p">Find the right specialist for your healthneeds 25+ medical specialities covered</p>
       <div className="header-div">
          < Brain className="header-icon" />
          <h2 className="header-h2">Psychiatrist</h2>
          <p className="header-p1">Mental health & wellness</p>
          <p className="header-p2">1,200+doctors</p>
       </div>
        <div className="header-div">
          <Stethoscope className="header-icon" />
          <h2 className="header-h2">General Physician</h2>
          <p className="header-p1">Cold,fever,infection & mor</p>
          <p className="header-p2">5,000+doctors</p>
       </div>
 <div className="header-div">
          <Heart className="header-icon" />
          <h2 className="header-h2">Cardiologist</h2>
          <p className="header-p1">Heart & Cardiovascular</p>
          <p className="header-p2">1,500+doctors</p>
       </div>
 <div className="header-div">
          <Bone className="header-icon" />
          <h2 className="header-h2">Orthopedic</h2>
          <p className="header-p1">Bone & joint specialist</p>
          <p className="header-p2">1,800+doctors</p>
       </div>
 <div className="header-div">
          <Venus className="header-icon" />
          <h2 className="header-h2">Gynecologist</h2>
          <p className="header-p1">Women's health & pregnancy</p>
          <p className="header-p2">2,500+doctors</p>
       </div>
 <div className="header-div">
          <Eye  className="header-icon" />
          <h2 className="header-h2">Ophthalmologist</h2>
          <p className="header-p1">Eye care & vision</p>
          <p className="header-p2">900+doctors</p>
       </div>
 <div className="header-div">
          <Baby  className="header-icon" />
          <h2 className="header-h2">Pediatrician</h2>
          <p className="header-p1">Child health specialists</p>
          <p className="header-p2">2,100+doctors</p>
       </div>
 <div className="header-div">
          <Smile className="header-icon" />
          <h2 className="header-h2">Dentist</h2>
          <p className="header-p1">Dental care & oral health</p>
          <p className="header-p2">1,500+doctors</p>
       </div>
 <div className="header-div">
          <Rose  className="header-icon" />
          <h2 className="header-h2">Dermatologist</h2>
          <p className="header-p1">Skin,hair & nail problems</p>
          <p className="header-p2">2,800+doctors</p>
       </div><br/>
       <button className="header-btn1">View All Specialities ➡</button>
      </section>
      <section className="container">
        <h1 className="header"> About MediCare</h1>
        <p className="header-p">Egypt's most trusted healthcare plateform, connecting patients with quality healthcare</p>
        <div className="header-div">
          <UsersRound className="header-icon" />
          <p className="num1">50,000+</p>
          <p className="header-p1">Verified Doctors</p>
       </div>
        <div className="header-div">
          <CalendarHeart  className="header-icon" />
          <p className="num1">10Lakh+</p>
          <p className="header-p1">Appointment Boocked</p>
       </div>
        <div className="header-div">
          <MapPin className="header-icon" />
          <p className="num1">100+</p>
          <p className="header-p1">Cities Covered</p>
       </div>
        <div className="header-div">
          <Award  className="header-icon" />
          <p className="num1">4.8⭐</p>
          <p className="header-p1">Patient Rating</p>
       </div>
       <div className="last">
           <h1 className="header1"> Our Mission</h1>
        <p className="header1-p">We believe everyone deserves access to quality healthcare
            Our mission to make healthcare accessible , afforable, and convenient for all egypt className through technology
            and innovation ,we're bridging the gap between patients and healthcare providers
        </p>
        </div>
         <div className="header-div1">
          <Award  className="header-icon" />
          <p className="num1">Quality Healthcare</p>
          <p className="header-p1">Partnered with top hospitals and experienced doctors to deliver care possible</p>
       </div>
        <div className="header-div1">
          <Heart className="header-icon" />
          <h2 className="header-h2">Patient-First Approach</h2>
          <p className="header-p1">Everyone decision we make is guided by what's best for our patients'health and wellbing</p>
       </div>
  <div className="header-div1">
          <Shield  className="header-icon" />
          <h2 className="header-h2">Trust & Transparency</h2>
          <p className="header-p1">Verified doctors , genuine reviews , and transparent pricing .no hidden charges ever</p>
       </div>
       <button className="header-btn1">Learn More About US ➡</button>
      </section>
    </div>
  );
}