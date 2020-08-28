// Home State
const homeState = function (page) {
    document.getElementById('heading').textContent = null;
    document.getElementById('content').innerHTML = `
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    `;
};
// About State
const aboutState = function (page) {
    document.getElementById('heading').textContent = 'About Us';
    document.getElementById('content').innerHTML = `
        <div class="card">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni minima vero. 
                    Rerum iste quasi ad perspiciatis quam inventore officiis iure tenetur neque natus eius 
                    sunt omnis tempore, ullam, explicabo a iusto saepe repellat dolore, non ratione cum aliquam 
                    molestiae! Eum magnam ipsa aperiam quas quisquam a mollitia ab corporis, quidem voluptatem 
                    tenetur modi rem aliquid nobis veritatis est similique voluptates dicta aliquam. 
                    Modi quis laudantium, quos obcaecati laboriosam vitae?
                </p>
            </div>
        </div>
    `;
};

// Contact State
const contactState = function (page) {
    document.getElementById('heading').textContent = 'Contact Us';
    document.getElementById('content').innerHTML = `
        <div class="contact-form">
            <p class="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
            <form action="/examples/actions/confirmation.php" method="post">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputFirstName">First Name</label>
                            <input type="text" class="form-control" id="inputFirstName" required="">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputLastName">Last Name</label>
                            <input type="text" class="form-control" id="inputLastName" required="">
                        </div>
                    </div>
                </div>            
                <div class="form-group">
                    <label for="inputEmail">Email Address</label>
                    <input type="email" class="form-control" id="inputEmail" required="">
                </div>
                <div class="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" id="inputMessage" rows="5" required=""></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Submit">
            </form>
        </div>
    `;
};
// Testimony State
const testimonialState = function (page) {
    document.getElementById('heading').textContent = null;
    document.getElementById('content').innerHTML = `
        <div class="container-xl bg-info pb-5">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h2>Testimonials</h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                        </ol>   
                        <!-- Wrapper for carousel items -->
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <div class="img-box"><img src="download.jpg" alt="Paula Wilson" class="rounded-circle"></div>
                                <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                            <div class="carousel-item active">
                                <div class="img-box " ><img src="p1.jpg" alt="Antonio Moreno" class="rounded-circle"></div>
                                <p class="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                <p class="overview"><b>Antonio Moreno</b>, Web Developer</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src="p2.jpg" alt="Michael Holz" class="rounded-circle"></div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                        </div>
                        <!-- Carousel controls -->
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const PageState = function () {
    let currentState = new homeState(this);

    this.init = () =>{
        this.change(new homeState);
    }
    
    this.change = (state) => {
        currentState = state;
    }
};


// Instantiate pageState
const page = new PageState();

// Init the first State
page.init();

// UI Years
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact'),
    testimonial = document.getElementById('testimonial');

// Add Event Listeners
// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
});
// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});
// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});
// Testimonial
testimonial.addEventListener('click', (e) => {
    page.change(new testimonialState);

    e.preventDefault();
})