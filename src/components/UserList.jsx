import { useRef, useState } from 'react';

// LAB 3: Find props, state, event handler and hooks in this component.
// LAB 5: Add a button that logs an Axios GET response in the console.
// LAB 6: Replace the static users with API data and handle loading/errors.
export default function UserList({ initialUsers }) {
  const [keyword, setKeyword] = useState('');
  const searchRef = useRef(null);

  const filteredUsers = initialUsers.filter((user) =>
    user.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <section className="panel" aria-labelledby="users-title">
      <div className="panel-header">
        <div>
          <p className="section-eyebrow">LAB 3 + LAB 5 + LAB 6</p>
          <h2 id="users-title">User directory</h2>
          <p className="subdued">State, Event, Props, useRef and API</p>
        </div>
        <span className="status-pill">Static data</span>
      </div>

      <div className="input-row">
        <input
          className="search-input"
          aria-label="Search users by name"
          placeholder="Search by name..."
          ref={searchRef}
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button className="ghost-button" onClick={() => searchRef.current?.focus()}>
          Focus
        </button>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="empty-state">No matching users.</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li className="user-row" key={user.id}>
              <span className="avatar" aria-hidden="true">{user.name[0]}</span>
              <div>
                <p className="user-name">{user.name}</p>
                <p className="user-email">{user.email}</p>
              </div>
              <span className="user-id">#{user.id}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="panel-footnote">{filteredUsers.length} of {initialUsers.length} users · Local sample data</p>
    </section>
  );
}
