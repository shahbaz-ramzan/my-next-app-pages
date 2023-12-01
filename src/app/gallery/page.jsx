      
"use client"
import { useState } from "react";
import styles from "./gallery.module.css"
// import Image from "next/image"
import { Image } from "antd"


export default function GalleryApp() {
//   const images = [
//     "/app-images/image-1.jpg" ,
// "/app-images/image-2.jpg" ,
// "/app-images/image-3.jpg" ,
// "/app-images/image-4.jpg" ,
// "/app-images/image-5.jpg" ,
// "/app-images/image-6.jpg" ,
// "/app-images/image-7.jpg" ,
// "/app-images/image-8.jpg" ,
// "/app-images/image-9.jpg" ,
// "/app-images/image-10.jpg",
// "/app-images/image-11.jpg",
// "/app-images/image-12.jpg",
// "/app-images/image-13.jpg",
// "/app-images/image-14.jpg",
// "/app-images/image-15.jpg",
// "/app-images/image-16.jpg",
// "/app-images/image-17.jpg",
// "/app-images/image-18.jpg",
// "/app-images/image-19.jpg",
// "/app-images/image-20.jpg",
// "/app-images/image-21.jpg",
// "/app-images/image-22.jpg",
// "/app-images/image-23.jpg",
// "/app-images/image-24.jpg",
// "/app-images/image-25.jpg",
// "/app-images/image-26.jpg",

//   ]
const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Image Gallery</h3>
          </div>
          <div className={styles.gallery}>
            <Image.PreviewGroup
                 preview={{
                       visible,
                   onVisibleChange: (vis) => setVisible(vis),
                 }}
            >
                 <Image className={styles.galleryImg} src="/app-images/image-1.jpg" alt="image-1" width="200px" height="200px" />
                 <Image className={styles.galleryImg} src="/app-images/image-2.jpg" alt="image-2" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-3.jpg" alt="image-3" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-4.jpg" alt="image-4" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-5.jpg" alt="image-5" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-6.jpg" alt="image-6" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-7.jpg" alt="image-7" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-8.jpg" alt="image-8" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-9.jpg" alt="image-9" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-10.jpg" alt="image-10" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-11.jpg" alt="image-11" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-12.jpg" alt="image-12" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-13.jpg" alt="image-13" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-14.jpg" alt="image-14" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-15.jpg" alt="image-15" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-16.jpg" alt="image-16" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-17.jpg" alt="image-17" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-18.jpg" alt="image-18" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-19.jpg" alt="image-19" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-20.jpg" alt="image-20" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-21.jpg" alt="image-21" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-22.jpg" alt="image-22" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-23.jpg" alt="image-23" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-24.jpg" alt="image-24" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-25.jpg" alt="image-25" width="200px" height="200px"/>
                 <Image className={styles.galleryImg} src="/app-images/image-26.jpg" alt="image-26" width="200px" height="200px" />
            </Image.PreviewGroup>
          </div>
         </div>
      </div>
    </>
  )
}
