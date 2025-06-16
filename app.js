function App() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        useScrollAnimation();
        useMouseTilt();
        useParallaxEffect();

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Navbar />
                <Hero />
                <UseCases />
                <Benefits />
                <Integrations />
                <Testimonials />
                <CTA />
                
                <footer className="glassmorphism py-12 px-6 text-center">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <img 
                                src="https://i.postimg.cc/ZKmLwfHs/Final-Pic-2.png" 
                                alt="GraviTech AI Logo"
                                className="w-8 h-8 object-contain"
                            />
                            <div className="text-white font-bold text-xl">
                                GraviTech<span className="text-purple-300"> AI</span>
                            </div>
                        </div>
                        <p className="text-purple-100 mb-6">
                            Empowering businesses with intelligent automation since 2024
                        </p>
                        <div className="flex justify-center space-x-8 mb-6">
                            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                                <a 
                                    key={item}
                                    href="#"
                                    className="text-purple-300 hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="border-t border-white/20 pt-6">
                            <p className="text-purple-200 text-sm">
                                © 2024 GraviTech AI. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
