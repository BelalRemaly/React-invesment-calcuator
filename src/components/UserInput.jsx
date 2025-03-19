export default function UserInput({ inputValue, onChangeValue }) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>initial investment</label>
                <input type="number" required
                    defaultValue={inputValue.initialInvestment}
                    onChange={
                        (Value) => onChangeValue("initialInvestment", Value.target.value)
                    } />
            </p>
            <p>
                <label>annual investment</label>
                <input type="number" required
                    defaultValue={inputValue.annualInvestment}
                    onChange={
                        (Value) => onChangeValue("annualInvestment", Value.target.value)
                    } />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>expected return </label>
                <input type="number" required
                    defaultValue={inputValue.expectedReturn}
                    onChange={
                        (Value) => onChangeValue("expectedReturn", Value.target.value)
                    } />
            </p>
            <p>
                <label>duration</label>
                <input type="number" required
                    defaultValue={inputValue.duration}
                    onChange={
                        (Value) => onChangeValue("duration", Value.target.value)
                    } />
            </p>
        </div>
    </section>
}
