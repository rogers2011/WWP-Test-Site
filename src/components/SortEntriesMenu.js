

function SortEntriesMenu(props) {

    function sort_entries() {

    }

    return (
        <nav className="menu">
            <ol>
                <li className="menu-item sort_entries_menu_2">
                    <a>Sort by <b className="entries_sorted_by_text">Newest</b></a>
                    <ol className="sub-menu sort_entries_sub_menu">
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'newest')}><a>Newest</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most 👍')}><a>Most Liked 👍</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most 🙏')}><a>Most Prayed For 🙏</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most ❤')}><a style={{color:"red"}}>❤</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most 😇')}><a>😇</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most 🎯')}><a>🎯</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'most 😡')}><a>😡</a></li>
                        <li className="menu-item sort_entries_choice" onClick={sort_entries(this, 'oldest')}><a>Oldest</a></li>
                    </ol>
                </li>
            </ol>
        </nav>
    );
}

export default SortEntriesMenu