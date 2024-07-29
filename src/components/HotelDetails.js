import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config.json";
import { Image, Shimmer } from "react-shimmer";
import AppBanner from "./AppBanner";
import ImageGallery from "./imageGallery";
import ReviewAndLocation from "./ReviewAndLocation";
import MeetHost from "./MeetHost";
import Footer from "./Footer";
import EnhancedNavbar from "./Nav";
import RentalInfo from "./RentalInfo";
import HostInfo from "./HostInfo";
import CheckInInfo from "./CheckInInfo";
import Description from "./Description";
import SleepingArrangement from "./SleepingArrangement";
import Amenities from "./Amenities";
import Calendar from "./Calendar";
import RightColumn from "./RightColumn";

const HotelDetails = () => {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchHotelData = async () => {
      if (!slug) {
        console.error("Slug is undefined");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${config.API_BASE_URL}/api/hotel/${slug}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.images = data.images.map((img) => `${config.API_BASE_URL}${img}`);
        data.host_image = `${config.API_BASE_URL}${data.host_image}`;
        setHotel({...data});

        const roomsResponse = await fetch(
          `${config.API_BASE_URL}/api/hotel/${slug}/rooms`
        );
        if (!roomsResponse.ok) {
          throw new Error(`HTTP error! status: ${roomsResponse.status}`);
        }
        const roomsData = await roomsResponse.json();
        roomsData.forEach((room) => {
          room.room_image = `${config.API_BASE_URL}${room.room_image}`;
        });
        setRooms([...roomsData]);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  if (loading) {
    return (
      <div className="hotel-details-loading">
        <AppBanner />
        <EnhancedNavbar />
        <Shimmer width={800} height={400} className="image-gallery-shimmer" />
        <div className="content-wrapper">
          <div className="left-column">
            <Shimmer width={600} height={100} className="rental-info-shimmer" />
            <Shimmer width={600} height={100} className="host-info-shimmer" />
            <Shimmer width={600} height={200} className="description-shimmer" />
            <Shimmer width={600} height={150} className="sleeping-arrangement-shimmer" />
            <Shimmer width={600} height={100} className="amenities-shimmer" />
            <Shimmer width={600} height={200} className="calendar-shimmer" />
          </div>
          <div className="right-column">
            <Shimmer width={300} height={400} className="right-column-shimmer" />
          </div>
        </div>
        <Shimmer width={800} height={200} className="review-location-shimmer" />
        <Shimmer width={800} height={150} className="meet-host-shimmer" />
        <Footer />
      </div>
    );
  }

  if (!hotel) {
    return <div>Hotel Not Found</div>;
  }

  return (
    <div className="hotel-details">
      <AppBanner />
      <EnhancedNavbar />
      <ImageGallery hotel={hotel} />

      <div className="content-wrapper">
        <div className="left-column">
          <RentalInfo address={hotel.address} bathroom_count={hotel.bathroom_count} bedroom_count={hotel.bedroom_count} guest_count={hotel.guest_count} />
          <hr />
          <HostInfo host_name={hotel.host_name} host_image={hotel.host_image} />
          <hr />
          <CheckInInfo host_name={hotel.host_name}/>
          <hr />
          <Description description={hotel.description}/>
          <hr />
          <SleepingArrangement rooms={rooms} />
          <hr />
          <Amenities amenities={hotel.amenities} />
          <hr />
          <Calendar />
        </div>
        <RightColumn />
      </div>

      <ReviewAndLocation address={hotel.address} latitude={hotel.latitude} longitude={hotel.longitude} />
      <MeetHost host_name={hotel.host_name} host_image={hotel.host_image}/>
      <Footer />
    </div>
  );
};

export default HotelDetails;