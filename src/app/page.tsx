"use client"

import Modal from "@/components/Modal";
import PhotoItem from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { use, useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="mx-2">
      <h1 className="text-2xl my-8 text-center font-bold">Intergalatics Photos</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {photoList.map(item => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal &&
        <Modal image={imageModal} closeModal={closeModal}/>
      }
    </div>
  )
}

export default Page;