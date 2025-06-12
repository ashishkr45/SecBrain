function LandingPage() {
	return (
		<>
			<div>
				<div className="relative min-h-[400vh]">
					{/* Gradient */}
					<div className="absolute inset-0 z-0 bg-[length:100%_100%] bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(to bottom,
							#000 0%,
							#1e3a8a 25%,
							#f8fafc 50%,
							#1e3a8a 75%,
							#000 100%)`
						}} />

					{/* Actual content */}
					<div className="relative z-10">
						<section className="h-screen flex items-center justify-center text-white text-4xl">
						Welcome to My Landing Page
						</section>
						<section className="h-screen flex items-center justify-center text-black text-4xl">
						Center Section
						</section>
						<section className="h-screen flex items-center justify-center text-white text-4xl">
						Footer Area
						</section>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage;