import AboutComponent from './AboutComponent';
import {
	IconDiamond,
	IconHeart,
	IconArrowBadgeDown,
	IconMapPin,
	IconUsers,
	IconDeviceGamepad2,
} from '@tabler/icons-react';

const Shop = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col max-w-7xl mx-auto justify-center items-center pt-20 text-white'>
				<div className='flex flex-wrap relative gap-20 justify-center'>
					<AboutComponent
						title={'One-of-a-Kind Roleplay Experience'}
						icon={<IconDiamond stroke={2} size={48} />}
						description={
							'Join our FiveM RP server for a unique roleplaying adventure, where creativity thrives. Build your character, shape your story, and create unforgettable moments with others. The possibilities are endless – dive in today!'
						}
					/>

					<AboutComponent
						title={'A World Built by Players, for Players'}
						icon={<IconArrowBadgeDown stroke={2} size={48} />}
						description={
							'Step into a player-driven world, where every interaction and story is shaped by you. Whether it’s heists, drama, or downtime, our community offers something for everyone. Come build your legacy with us!'
						}
					/>

					<AboutComponent
						title={'Craft Your Own Story in Our RP Universe'}
						icon={<IconHeart stroke={2} size={48} />}
						description={
							'Create your own narrative in a constantly evolving world. With realistic roleplay and character development, every choice impacts your journey. Join our community of storytellers and make your mark!'
						}
					/>

					<AboutComponent
						title={'Explore a Living, Breathing Map'}
						icon={<IconMapPin stroke={2} size={48} />}
						description={
							'Discover a dynamic city filled with events, locations, and hidden gems. Our constantly updated map ensures there’s always something new to explore around every corner.'
						}
					/>

					<AboutComponent
						title={'Built by a Tight-Knit Community'}
						icon={<IconUsers stroke={2} size={48} />}
						description={
							'Join a passionate group of players who shape the world together. Whether you’re new or a veteran, our friendly community helps you find your place in the story.'
						}
					/>

					<AboutComponent
						title={'RP Meets Game Mechanics'}
						icon={<IconDeviceGamepad2 stroke={2} size={48} />}
						description={
							'Experience immersive roleplay enhanced by in-game mechanics. From custom jobs to detailed inventories, every system is designed to support your character’s development.'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Shop;
