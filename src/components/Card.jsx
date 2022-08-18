import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
    const {
        location,
        current,
    } = data;
    return (
        <div className="bg-white p-6 mt-10 rounded-lg shadow-xl min-w-[20%]">
            <section className="text-center">
                <span className="block text-xl font-bold text-slate-700">{location?.name}</span>
                <span className="text-slate-400 text-sm font-medium">{`${location?.region}, ${location?.country}`}</span>
            </section>
            <section className="font-bold text-slate-800 flex justify-center mt-4 mb-2">
                <span className="text-8xl">{current?.temp_c}</span>
                <span className="text-2xl mt-2">ºC</span>
            </section>
            <section className="flex justify-center flex-col items-center">
                <img src={current?.condition?.icon} alt={current?.condition?.text} />
                <span className="text-slate-700 font-medium">{current?.condition?.text}</span>
            </section>
        </div>
    );
}

export default Card;

Card.propTypes = {
    data: propTypes.object,
}.isRequired;