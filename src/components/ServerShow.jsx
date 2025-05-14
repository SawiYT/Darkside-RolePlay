import ServerElement from './ServerElement';

const ServerShow = () => {
	return (
		<div
			id='info'
			style={{
				background: 'linear-gradient(180deg, #000000 0%, #101010 65%)',
			}}
			className=''>
			<ServerElement
				imageSrc='1.jpg'
				title='Join a Law Enforcement Faction in Los Santos'
				description='Embark on your Role Play journey as a fearless law enforcement officer. Join one of the many law enforcement factions on our server and enjoy enforcing the law in the city of Los Santos and throughout the state of San Andreas. With the advanced features of the GTA V platform, gameplay in LEA factions is top-tier!'
				buttonText='Become a Law Enforcer'
				imageRight={false}
			/>

			<ServerElement
				imageSrc='2.jpg'
				title='A World of Opportunities Awaits'
				description='Whether you’re into high-speed chases or crime investigations, Los Santos offers endless RP experiences. Play with others, dive into dynamic action, and live out a truly immersive GTA V world.'
				buttonText='Join Now'
				imageRight={true}
			/>

			<ServerElement
				imageSrc='3.jpg'
				title='Step into the Shoes of a Hero'
				description='As a law enforcer, you’ll protect citizens, catch criminals, and bring justice to Los Santos. Be the hero the city needs in a detailed and exciting GTA RP setting!'
				buttonText='Become a Hero'
				imageRight={false}
			/>
		</div>
	);
};

export default ServerShow;
