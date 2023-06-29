import { footerLinks } from '@/constants'
import Image from 'next/image'
import FooterColum from './FooterColum'

const Footer = () => {
	return (
		<footer className='flexStart footer'>
			<div className='flex flex-col gap-12 w-full'>
				<div className='flex items-start flex-col'>
					<Image
						src='/logo-purple.svg'
						width={115}
						height={38}
						alt='Flexible'
					/>
					<p className='text-start text-sm font-normal mt-5 max-w-xs'>
						Flexible is the world leading community for creatives to share
					</p>
				</div>
				<div className='flex flex-wrap gap-12'>
					<FooterColum
						title={footerLinks[0].title}
						links={footerLinks[0].links}
					/>
					<div className='flex-1 flex flex-col gap-4'>
						<FooterColum
							title={footerLinks[1].title}
							links={footerLinks[1].links}
						/>
						<FooterColum
							title={footerLinks[2].title}
							links={footerLinks[2].links}
						/>
					</div>
					<FooterColum
						title={footerLinks[3].title}
						links={footerLinks[3].links}
					/>
					<div className='flex-1 flex flex-col gap-4'>
						<FooterColum
							title={footerLinks[4].title}
							links={footerLinks[4].links}
						/>
						<FooterColum
							title={footerLinks[5].title}
							links={footerLinks[5].links}
						/>
					</div>
               <FooterColum
							title={footerLinks[6].title}
							links={footerLinks[6].links}
						/>
				</div>
			</div>
         <div className="flexBetween footer_copyright">
            <p>@ 2023 Flexibble. All rights reserved </p>
            <p className='text-gray'>
               <span className='text-black font-semibold'>10,214</span>
               projects submitted
            </p>
         </div>
		</footer>
	)
}

export default Footer