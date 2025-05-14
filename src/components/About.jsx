import AboutComponent from './AboutComponent';
import { IconDiamond } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconArrowBadgeDown } from '@tabler/icons-react';

const Shop = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col max-w-7xl mx-auto justify-center items-center pt-20 text-white'>
				<div className='flex flex-wrap relative gap-20 justify-center'>
					<div className='flex justify-center'>
						<p className='text-[#f92763] pt-5 text-2xl'>
							<IconHeart stroke={2} size={48} />
						</p>
						<AboutComponent
							title={'One-of-a-Kind Roleplay Experience'}
							description={
								'Join our FiveM RP server for a unique roleplaying adventure, where creativity thrives. Build your character, shape your story, and create unforgettable moments with others. The possibilities are endless – dive in today!'
							}
						/>
					</div>

					<div className='flex justify-center'>
						<p className='text-[#f92763] pt-5 text-2xl'>
							<IconArrowBadgeDown stroke={2} size={48} />
						</p>
						<AboutComponent
							title={'A World Built by Players, for Players'}
							description={
								'Step into a player-driven world, where every interaction and story is shaped by you. Whether it’s heists, drama, or downtime, our community offers something for everyone. Come build your legacy with us!'
							}
						/>
					</div>

					<div className='flex justify-center'>
						<p className='text-[#f92763] pt-5 text-2xl'>
							<IconDiamond stroke={2} size={48} />
						</p>
						<AboutComponent
							title={'Craft Your Own Story in Our RP Universe'}
							description={
								'Create your own narrative in a constantly evolving world. With realistic roleplay and character development, every choice impacts your journey. Join our community of storytellers and make your mark!'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
