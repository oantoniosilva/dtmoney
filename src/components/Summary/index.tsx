import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Input</p>
          <img src={incomeImg} alt="Input" />
        </header>
        <strong>$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Output</p>
          <img src={outcomeImg} alt="Output" />
        </header>
        <strong>- $500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500,00</strong>
      </div>
    </Container>
  )
}