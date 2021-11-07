
import React from 'react'

const Chip = () => {
    return (
        <>
             <div className="d-flex">
                    <span><i class="bi bi-volume-up" style={{ fontSize: '3rem', marginLeft: '-2.5rem' }}></i></span>

                    <span style={{ backgroundColor: '#e9967a', borderRadius: '50%', width: '4rem', height: '5rem', objectFit: 'cover' }}> <i className="bi bi-bookshelf "
                        style={{ fontSize: '3.9rem', color: '#8b0000', }}></i>
                    </span>
                </div>

        </>
    )
}

export default Chip
