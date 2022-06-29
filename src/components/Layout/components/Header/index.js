import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Menu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)

const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult(['account1', 'account2', 'account3'])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='TikTok' />
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                            <PopperWrapper>
                                <h5 className={cx('search-title')}>Accounts</h5>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchResult.length > 0}
                >
                    <div className={cx('search')}>
                        <input type='text' placeholder='Search accounts and videos' spellCheck='false' />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <span className={cx('splitter')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button>
                        <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlus} />
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={menuItems}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header