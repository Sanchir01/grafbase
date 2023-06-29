import { IColumProps } from '@/types/footer.interface'
import Link from 'next/link'

const FooterColum = ({ title, links }: IColumProps) => (
	<div className='footer_colum'>
		<h4 className='font-semibold'>{title}</h4>
		<ul className='flex flex-col gap-2 font-normal'>
			{links.map(item => (
				<Link href={'/'} key={item}>
					{item}
				</Link>
			))}
		</ul>
	</div>
)

export default FooterColum
