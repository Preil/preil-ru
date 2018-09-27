<template>
    <section class="container">
        <div class="row">
            <div class="col-md-6">
                <div >
                    <div >
                        <div class="card" >
                            <div >
                                <img class="card-img-top" :src="currentImage" alt="">
                                    <a @click="prevImage" class="carousel-control-prev">
                                        <span class="carousel-control-prev-icon"></span>
                                    </a>
                                    <a @click="nextImage" class="carousel-control-next">
                                        <span class="carousel-control-next-icon"></span>
                                    </a>
                            </div>

                            <div >
                                <span
                                        v-for="(image, index) in  images"
                                        :key="image.id"
                                        :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                                        @click="activateImage(index)"
                                >
                                    <img class="img-thumbnail rounded" :src="image.thumb">
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                //Array to hold all carousel images
                images: [
                    {
                        id: '1',
                        big: 'src/assets/images/07.jpg',
                        thumb: 'src/assets/images/tbn07.jpg'
                    },
                    {
                        id: '2',
                        big: 'src/assets/images/08.jpg',
                        thumb: 'src/assets/images/tbn08.jpg'
                    },
                    {
                        id: '3',
                        big: 'src/assets/images/09.jpg',
                        thumb: 'src/assets/images/tbn09.jpg'
                    },
                    {
                        id: '4',
                        big: 'src/assets/images/10.jpg',
                        thumb: 'src/assets/images/tbn10.jpg'
                    }
                ],
                //Index of the active image on the images array
                activeImage: 0
            }
        },
        computed: {
            // currentImage gets called whenever activeImage changes
            // and is the reason why we don't have to worry about the
            // big image getting updated
            currentImage() {
                return this.images[this.activeImage].big;
            }
        },
        methods: {
            // Go forward on the images array
            // or go at the first image if you can't go forward :/
            nextImage() {
                var active = this.activeImage + 1;
                if (active >= this.images.length) {
                    active = 0;
                }
                this.activateImage(active);
            },
            // Go backwards on the images array
            // or go at the last image
            prevImage() {
                var active = this.activeImage - 1;
                if (active < 0) {
                    active = this.images.length - 1;
                }
                this.activateImage(active);
            },
            activateImage(imageIndex) {
                this.activeImage = imageIndex;
            }
        }
    }

</script>