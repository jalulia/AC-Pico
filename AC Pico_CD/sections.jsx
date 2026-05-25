/* global React, ReactDOM */

/* ============================================================
   SECTIONS 02–08 — variants, capacity, connectors, signal,
   BOM, build, sources. Mid-century-Swiss editorial.
   ============================================================ */

/* --- §02 VARIANTS — Haven-1 style spec comparison ---------- */
function Variants() {
  return (
    <section id="variants" data-screen-label="02 Variants">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 02</span>
          <span className="ttl">Variants &amp; Population Options</span>
          <span className="meta">One PCB · Three personalities</span>
        </div>
        <hr className="rule" />

        <div className="variants-head">
          <div>
            <span className="eyebrow">§ 02 · Variants</span>
            <h2 style={{ marginTop: 14 }}>
              The same board,<br/>
              populated to suit the cabinet.
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            Treat digital-heavy and analog-heavy builds as <em>population options</em> on a single PCB. The same fabrication can be assembled three ways depending on cabinet count and control mix. None of these requires a board respin.
          </p>
        </div>

        <div className="variant-table" style={{ marginTop: 36 }}>
          <table className="spec">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Specification</th>
                <th>
                  <div className="vname">Standard</div>
                  <div className="vsub">32 D / 8 A</div>
                </th>
                <th>
                  <div className="vname">Digital-heavy</div>
                  <div className="vsub">48 D / 8 A</div>
                </th>
                <th>
                  <div className="vname">Analog-heavy</div>
                  <div className="vsub">32 D / 16 A</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="label">Digital inputs</td><td className="val">32 switch-to-GND</td><td className="val">48 switch-to-GND</td><td className="val">32 switch-to-GND</td></tr>
              <tr><td className="label">Analog inputs</td><td className="val">8 channels · 12-bit</td><td className="val">8 channels · 12-bit</td><td className="val">16 channels · 12-bit</td></tr>
              <tr><td className="label">Spinner ports</td><td className="val">2–4 quadrature</td><td className="val">2–4 quadrature</td><td className="val">2–4 quadrature</td></tr>
              <tr><td className="label">LED sinks</td><td className="val">10 low-side · PWM</td><td className="val">10 low-side · PWM</td><td className="val">10 low-side · PWM</td></tr>
              <tr><td className="label">Shift registers</td><td className="val">4 × 74HC165</td><td className="val">6 × 74HC165</td><td className="val">4 × 74HC165</td></tr>
              <tr><td className="label">ADCs populated</td><td className="val">1 × MCP3208</td><td className="val">1 × MCP3208</td><td className="val">2 × MCP3208</td></tr>
              <tr><td className="label">USB</td><td className="val">Pico H micro-USB</td><td className="val">Pico H micro-USB</td><td className="val">Pico H micro-USB</td></tr>
              <tr><td className="label">Logic supply</td><td className="val">USB 5V → 3.3V</td><td className="val">USB 5V → 3.3V</td><td className="val">USB 5V → 3.3V</td></tr>
              <tr><td className="label">LED supply</td><td className="val">Ext. 5–12V · fused</td><td className="val">Ext. 5–12V · fused</td><td className="val">Ext. 5–12V · fused</td></tr>
              <tr><td className="label">Use case</td><td className="val">Single-cab default</td><td className="val">4-player fighter cab</td><td className="val">Cockpit · sims · sliders</td></tr>
              <tr>
                <td className="label">Board-side cost</td>
                <td className="val"><span style={{ color: 'var(--vermilion)' }}>$35–$55</span></td>
                <td className="val">$40–$62</td>
                <td className="val">$40–$62</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* --- §03 CAPACITY — 4-joystick arithmetic ----------------- */
function Capacity() {
  return (
    <section id="capacity" data-screen-label="03 Capacity">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 03</span>
          <span className="ttl">Capacity · The four-joystick question</span>
          <span className="meta">Arithmetic, not opinion</span>
        </div>
        <hr className="rule" />

        <div className="cap-head">
          <div>
            <span className="eyebrow">§ 03 · Capacity</span>
            <h2 style={{ marginTop: 14 }}>
              Can it support<br/>
              four joysticks?
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            Two cabinet patterns, two answers, one footprint. The same board takes either case; what changes is which footprints get parts. Below: budget the inputs and check the population option matches.
          </p>
        </div>

        {/* Visual math twin */}
        <div className="cap-grid" style={{ marginTop: 36 }}>

          {/* DIGITAL CASE */}
          <div className="cap-card">
            <div className="cap-card-head">
              <span className="callout-num blue" style={{ background: 'var(--inkblue)' }}>D</span>
              <div>
                <div className="mono-xs" style={{ color: 'var(--ink-faint)' }}>CASE D</div>
                <h3>Four digital joysticks</h3>
              </div>
            </div>

            <p className="body" style={{ marginTop: 14 }}>
              A digital joystick is four switches: up, down, left, right. Four sticks consume 16 of the 32 standard inputs — leaving 16 spares for starts, coins, service, admin, and gameplay buttons.
            </p>

            <DigitalMath />

            <div className="cap-note">
              <span className="mono-xs">VERDICT</span>
              <p>Yes, on the <strong>Standard</strong> build. For 4-player cabinets with heavy action-button counts, build the <strong>Digital-heavy</strong> variant (six shift registers, 48 inputs).</p>
            </div>
          </div>

          {/* ANALOG CASE */}
          <div className="cap-card">
            <div className="cap-card-head">
              <span className="callout-num" style={{ background: 'var(--vermilion)' }}>A</span>
              <div>
                <div className="mono-xs" style={{ color: 'var(--ink-faint)' }}>CASE A</div>
                <h3>Four Hall-effect joysticks</h3>
              </div>
            </div>

            <p className="body" style={{ marginTop: 14 }}>
              A Hall stick needs an X and a Y voltage. Four sticks consume all eight channels of one MCP3208, leaving zero spare analog for pots or sliders.
            </p>

            <AnalogMath />

            <div className="cap-note">
              <span className="mono-xs">VERDICT</span>
              <p>Yes, but with zero spare analog. For cabinets that also want pots, sliders, or pedals, populate the <strong>second MCP3208</strong> footprint (Analog-heavy variant).</p>
            </div>
          </div>
        </div>

        <hr className="rule" style={{ marginTop: 48 }} />
        <div className="design-rule">
          <span className="callout-num" style={{ background: 'var(--vermilion)' }}>!</span>
          <p>
            <strong>Design rule.</strong> Digital-heavy and analog-heavy builds are <em>population options</em> on the same PCB. Never respin a board to add inputs; lay both footprints from day one and decide at assembly.
          </p>
        </div>
      </div>
    </section>
  );
}

function DigitalMath() {
  return (
    <svg viewBox="0 0 540 220" className="cap-math">
      {/* 4 sticks × 4 dirs */}
      <g>
        {[0, 1, 2, 3].map(i => (
          <g key={i} transform={`translate(${20 + i * 70} 30)`}>
            {/* compass */}
            <circle cx="20" cy="30" r="22" className="ink hair" />
            <line x1="20" y1="14" x2="20" y2="46" className="ink hair" />
            <line x1="4" y1="30" x2="36" y2="30" className="ink hair" />
            <circle cx="20" cy="30" r="3" className="blue-fill" />
            <text x="20" y="80" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>STICK {i + 1}</text>
            <text x="20" y="92" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 7 }}>4 SW</text>
          </g>
        ))}
      </g>
      {/* × */}
      <text x="312" y="62" className="ink-fill" textAnchor="middle" style={{ fontSize: 24, fontFamily: 'var(--mono)' }}>=</text>
      {/* sum */}
      <g transform="translate(340 28)">
        <rect x="0" y="0" width="180" height="64" className="ink hair" />
        <text x="90" y="28" className="ink-fill" textAnchor="middle" style={{ fontSize: 28, fontFamily: 'var(--sans)', fontWeight: 500 }}>16</text>
        <text x="90" y="50" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>DIGITAL INPUTS USED</text>
      </g>

      {/* bar of 32 inputs, 16 filled */}
      <g transform="translate(20 130)">
        <text x="0" y="-6" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>BUDGET · 32 DIGITAL INPUTS</text>
        {Array.from({ length: 32 }).map((_, i) => (
          <rect
            key={i}
            x={i * 15.5}
            y="0"
            width="13"
            height="22"
            className={i < 16 ? 'blue-fill' : 'ink hair'}
            fill={i < 16 ? 'var(--inkblue)' : 'transparent'}
          />
        ))}
        <text x="124" y="40" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8, fill: 'var(--inkblue)' }}>USED · 16</text>
        <text x="372" y="40" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>SPARE · 16</text>
        {/* bracket */}
        <line x1="0" y1="28" x2="248" y2="28" className="ink hair" />
        <line x1="0" y1="28" x2="0" y2="32" className="ink hair" />
        <line x1="248" y1="28" x2="248" y2="32" className="ink hair" />
        <line x1="252" y1="28" x2="495" y2="28" className="ink hair" />
        <line x1="252" y1="28" x2="252" y2="32" className="ink hair" />
        <line x1="495" y1="28" x2="495" y2="32" className="ink hair" />
      </g>
    </svg>
  );
}

function AnalogMath() {
  return (
    <svg viewBox="0 0 540 220" className="cap-math">
      {/* 4 sticks with X/Y axes */}
      <g>
        {[0, 1, 2, 3].map(i => (
          <g key={i} transform={`translate(${20 + i * 70} 30)`}>
            <circle cx="20" cy="30" r="22" className="ink hair" />
            <line x1="20" y1="14" x2="20" y2="46" className="verm hair" strokeWidth="1.5" />
            <line x1="4" y1="30" x2="36" y2="30" className="verm hair" strokeWidth="1.5" />
            <circle cx="20" cy="30" r="3" className="verm-fill" />
            <text x="20" y="80" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>HALL {i + 1}</text>
            <text x="20" y="92" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 7 }}>X · Y</text>
          </g>
        ))}
      </g>
      <text x="312" y="62" className="ink-fill" textAnchor="middle" style={{ fontSize: 24, fontFamily: 'var(--mono)' }}>=</text>
      <g transform="translate(340 28)">
        <rect x="0" y="0" width="180" height="64" className="ink hair" />
        <text x="90" y="28" className="ink-fill" textAnchor="middle" style={{ fontSize: 28, fontFamily: 'var(--sans)', fontWeight: 500 }}>8</text>
        <text x="90" y="50" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>ANALOG CHANNELS USED</text>
      </g>

      {/* bar of 8 channels, all filled */}
      <g transform="translate(20 130)">
        <text x="0" y="-6" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>BUDGET · 8 ANALOG CHANNELS (1× MCP3208)</text>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={i * 62}
            y="0"
            width="56"
            height="22"
            fill="var(--vermilion)"
          />
        ))}
        <text x="248" y="40" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8, fill: 'var(--vermilion)' }}>USED · 8 · ZERO SPARE</text>
      </g>
    </svg>
  );
}

/* --- §04 CONNECTOR MAP --------------------------------------- */
const CONNECTORS = [
  {
    n: '04A', tone: 'blue', name: 'J_DIGITAL', sub: 'IN0 → IN31',
    use: 'Buttons, digital joystick directions, coin/start/service/admin.',
    wiring: 'Normally-open contact shorts the input to ground. Internal pull-ups live on the carrier.',
    pins: ['IN0', 'IN1', 'IN2', 'IN3', '...', 'IN31', 'GND']
  },
  {
    n: '04B', tone: 'verm', name: 'J_SPIN 0–3', sub: '+5V · GND · A · B',
    use: 'SpinTrak-class quadrature spinners and two-channel encoders.',
    wiring: 'A/B made 3.3V-safe before Pico GPIO. PIO decoder handles the quadrature.',
    pins: ['+5V', 'GND', 'A', 'B']
  },
  {
    n: '04C', tone: 'blue', name: 'J_ANALOG', sub: '3V3 · GND · A0–A7',
    use: 'Hall-effect joysticks, analog levers, pots, sliders.',
    wiring: 'Prefer 0–3.3V output. 0.5–4.5V Hall modules need a divider plus firmware calibration.',
    pins: ['3V3', 'GND', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7']
  },
  {
    n: '04D', tone: 'gold', name: 'J_LED_POWER', sub: 'VLED+ · GND',
    use: 'External LED / lamp supply, fused on board.',
    wiring: 'USB powers the logic only. External 5V or 12V powers the LED rail. Grounds tie at the star point.',
    pins: ['VLED+', 'GND']
  },
  {
    n: '04E', tone: 'gold', name: 'J_LED_OUT', sub: 'OUT0 → OUT9',
    use: 'Button LEDs, cabinet lamps, status indicators.',
    wiring: 'Low-side sink. Load connects between VLED+ and OUTx; brightness is PWM per channel.',
    pins: ['OUT0', 'OUT1', 'OUT2', 'OUT3', 'OUT4', 'OUT5', 'OUT6', 'OUT7', 'OUT8', 'OUT9']
  },
  {
    n: '04F', tone: 'ink', name: 'USB', sub: 'Pico micro-USB',
    use: 'Connection to the game PC and Unity host.',
    wiring: 'v0.1 routes through the Pico H module. A later integrated RP2040 board can move this to USB-C.',
    pins: ['VBUS', 'D-', 'D+', 'GND']
  }
];

function MiniTerminal({ pins, tone }) {
  const color =
    tone === 'verm' ? 'var(--vermilion)' :
    tone === 'blue' ? 'var(--inkblue)' :
    tone === 'gold' ? 'var(--gold)' : 'var(--ink)';

  const w = pins.length <= 4 ? 220 : pins.length <= 7 ? 280 : 340;

  return (
    <svg viewBox={`0 0 ${w} 100`} className="mini-term">
      {/* body */}
      <rect x="10" y="20" width={w - 20} height="50" className="ink" strokeWidth="1.25" />
      <line x1="10" y1="34" x2={w - 10} y2="34" className="ink hair" />
      {/* pins */}
      {pins.map((p, i) => {
        const step = (w - 40) / pins.length;
        const cx = 20 + step / 2 + i * step;
        return (
          <g key={i}>
            <line x1={cx} y1="70" x2={cx} y2="80" className="ink hair" strokeWidth="1.5" />
            <circle cx={cx} cy="50" r="3" fill={color} />
            <text x={cx} y="93" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>{p}</text>
          </g>
        );
      })}
      {/* mounting screws on body */}
      <circle cx="20" cy="27" r="2.5" className="ink hair" />
      <circle cx={w - 20} cy="27" r="2.5" className="ink hair" />
      {/* leader sample */}
      <line x1="10" y1="18" x2="10" y2="8" className="ink hair" strokeDasharray="2 2" />
      <line x1={w - 10} y1="18" x2={w - 10} y2="8" className="ink hair" strokeDasharray="2 2" />
    </svg>
  );
}

function Connectors() {
  return (
    <section id="connectors" data-screen-label="04 Connectors">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 04</span>
          <span className="ttl">Connector Map · Field wiring</span>
          <span className="meta">Pluggable screw terminals</span>
        </div>
        <hr className="rule" />

        <div className="cap-head">
          <div>
            <span className="eyebrow">§ 04 · Connectors</span>
            <h2 style={{ marginTop: 14 }}>
              Labels you can<br/>
              read at arm's length.
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            For v0.1, use pluggable screw terminals or Euroblock-style connectors. They cost more than raw headers, but make early cabinet installs and debugging much less painful. Field-wiring readability is a feature, not a polish item.
          </p>
        </div>

        <div className="connector-grid" style={{ marginTop: 36 }}>
          {CONNECTORS.map(c => (
            <article key={c.n} className="conn">
              <div className="conn-head">
                <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>{c.n}</span>
                <span className="lane-swatch" style={{
                  width: 14, height: 14, display: 'inline-block',
                  background: c.tone === 'verm' ? 'var(--vermilion)' :
                              c.tone === 'blue' ? 'var(--inkblue)' :
                              c.tone === 'gold' ? 'var(--gold)' : 'var(--ink)'
                }} />
              </div>
              <h3 className="conn-name">{c.name}</h3>
              <div className="mono-xs" style={{ color: 'var(--ink-faint)', marginTop: 6 }}>{c.sub}</div>

              <div className="conn-fig">
                <MiniTerminal pins={c.pins} tone={c.tone} />
              </div>

              <div className="conn-body">
                <div>
                  <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>USE</span>
                  <p className="body" style={{ fontSize: 13, marginTop: 4 }}>{c.use}</p>
                </div>
                <div>
                  <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>WIRING</span>
                  <p className="body" style={{ fontSize: 13, marginTop: 4 }}>{c.wiring}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- §05 SIGNAL FLOW + FIRMWARE LOOP ------------------------- */
function SignalFlow() {
  return (
    <section id="signal" data-screen-label="05 Signal Flow">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 05</span>
          <span className="ttl">Signal Flow · Switch → USB</span>
          <span className="meta">Every 1 ms · 1000 Hz</span>
        </div>
        <hr className="rule" />

        <div className="cap-head">
          <div>
            <span className="eyebrow">§ 05 · Signal flow</span>
            <h2 style={{ marginTop: 14 }}>
              Perimeter to silicon,<br/>
              silicon to host.
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            Three lanes — digital, analog, quadrature — converge at the Pico. The firmware loop scans every input, applies debounce and calibration, and emits HID reports only when state changes. LED commands ride the same USB cable on a parallel CDC serial channel.
          </p>
        </div>

        <div className="plate" style={{ marginTop: 36 }}>
          <div className="reg tl"></div><div className="reg tr"></div>
          <div className="reg bl"></div><div className="reg br"></div>
          <div className="plate-head">
            <span className="pl-title">Plate 05 · Signal flow · One 1 ms cycle</span>
            <span className="pl-meta">FRAME RATE — 1 kHz · SAMPLE → REPORT</span>
          </div>
          <SignalDiagram />
          <div className="plate-caption">
            <span className="fig">Fig. 05</span>
            <span className="desc">
              The three input lanes are independent. Digital uses three Pico GPIO; analog uses an SPI bus shared with optional second ADC; quadrature uses one PIO program per spinner. Output flows back as PWM to the MOSFET bank.
            </span>
          </div>
        </div>

        {/* Firmware loop pseudocode */}
        <div className="cap-grid" style={{ marginTop: 36 }}>
          <div className="cap-card">
            <span className="eyebrow">v0.1 USB behaviour</span>
            <h3 style={{ marginTop: 10 }}>HID gamepad + mouse + CDC serial</h3>
            <p className="body" style={{ marginTop: 12 }}>
              Start composite. The board is useful before Unity exists — inputs appear as standard HID devices any OS recognises; LEDs ride a CDC serial text protocol that is easy to test from a terminal.
            </p>
            <ProtocolDiagram />
          </div>

          <div className="cap-card">
            <span className="eyebrow">Firmware main loop</span>
            <h3 style={{ marginTop: 10 }}>Every 1 ms</h3>
            <pre className="loop-pre">
{`every 1 ms:
  latch + read  74HC165 ──► digital
  debounce      per-input switch states
  read          quadrature spinner counters
  sample        MCP3208 over SPI ──► A0..A7
  apply         deadzone · centre · smoothing · inv
  emit          HID report on change
  parse         serial LED commands
  update        PWM outputs to OUT0..OUT9`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalDiagram() {
  return (
    <svg viewBox="0 0 1200 480" className="signal-svg">
      {/* lanes labels */}
      <g>
        <text x="20" y="100" className="lbl-sm fill-only" stroke="none">DIGITAL</text>
        <text x="20" y="240" className="lbl-sm fill-only" stroke="none">ANALOG</text>
        <text x="20" y="380" className="lbl-sm fill-only" stroke="none">QUAD.</text>
      </g>

      {/* lane separators */}
      <g className="ink hair" opacity=".4">
        <line x1="100" y1="150" x2="1180" y2="150" strokeDasharray="2 4" />
        <line x1="100" y1="290" x2="1180" y2="290" strokeDasharray="2 4" />
      </g>

      {/* DIGITAL LANE */}
      <g transform="translate(110 60)">
        <rect x="0" y="0" width="100" height="80" className="ink" strokeWidth="1.25" />
        <text x="50" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">SWITCH</text>
        <text x="50" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>32× to GND</text>
        <text x="50" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 10, fill: 'var(--inkblue)' }}>IN0..31</text>
        <line x1="100" y1="40" x2="170" y2="40" className="blue" strokeWidth="1.5" />
        <polygon points="170,40 162,36 162,44" fill="var(--inkblue)" />
      </g>
      <g transform="translate(290 60)">
        <rect x="0" y="0" width="120" height="80" className="ink" strokeWidth="1.25" />
        <text x="60" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">74HC165</text>
        <text x="60" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>PISO · ×4</text>
        <text x="60" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 9 }}>parallel → serial</text>
        <line x1="120" y1="40" x2="200" y2="40" className="blue" strokeWidth="1.5" />
        <text x="160" y="34" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 7 }}>3 GPIO</text>
        <polygon points="200,40 192,36 192,44" fill="var(--inkblue)" />
      </g>

      {/* ANALOG LANE */}
      <g transform="translate(110 200)">
        <rect x="0" y="0" width="100" height="80" className="ink" strokeWidth="1.25" />
        <text x="50" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">HALL · POT</text>
        <text x="50" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>0 → 3.3 V</text>
        <text x="50" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 10, fill: 'var(--inkblue)' }}>A0..A7</text>
        <line x1="100" y1="40" x2="170" y2="40" className="blue" strokeWidth="1.5" />
        <polygon points="170,40 162,36 162,44" fill="var(--inkblue)" />
      </g>
      <g transform="translate(290 200)">
        <rect x="0" y="0" width="120" height="80" className="ink" strokeWidth="1.25" />
        <text x="60" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">MCP3208</text>
        <text x="60" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>12-bit · SPI</text>
        <text x="60" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 9 }}>analog → digital</text>
        <line x1="120" y1="40" x2="200" y2="40" className="blue" strokeWidth="1.5" />
        <text x="160" y="34" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 7 }}>SPI</text>
        <polygon points="200,40 192,36 192,44" fill="var(--inkblue)" />
      </g>

      {/* QUAD LANE */}
      <g transform="translate(110 340)">
        <rect x="0" y="0" width="100" height="80" className="ink" strokeWidth="1.25" />
        <text x="50" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">SPINNER</text>
        <text x="50" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>2 → 4</text>
        <text x="50" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 10, fill: 'var(--vermilion)' }}>A · B quad.</text>
        <line x1="100" y1="40" x2="170" y2="40" className="verm" strokeWidth="1.5" />
        <polygon points="170,40 162,36 162,44" fill="var(--vermilion)" />
      </g>
      <g transform="translate(290 340)">
        <rect x="0" y="0" width="120" height="80" className="ink" strokeWidth="1.25" />
        <text x="60" y="32" className="lbl-sm fill-only" stroke="none" textAnchor="middle">PIO DECODE</text>
        <text x="60" y="48" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>state machine</text>
        <text x="60" y="62" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 9 }}>signed counter</text>
        <line x1="120" y1="40" x2="200" y2="40" className="verm" strokeWidth="1.5" />
        <polygon points="200,40 192,36 192,44" fill="var(--vermilion)" />
      </g>

      {/* CONVERGE → PICO */}
      <g transform="translate(510 130)">
        <rect x="0" y="0" width="180" height="220" className="ink" strokeWidth="1.5" />
        <line x1="0" y1="24" x2="180" y2="24" className="ink hair" />
        <text x="90" y="17" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 9 }}>RASPBERRY · PI · PICO · H</text>
        <text x="90" y="60" className="ink-fill" textAnchor="middle" style={{ fontSize: 26, fontFamily: 'var(--sans)', fontWeight: 500 }}>RP2040</text>
        <text x="90" y="84" className="lbl-sm fill-only" stroke="none" textAnchor="middle">CORTEX-M0+ · 133 MHz</text>
        <line x1="20" y1="100" x2="160" y2="100" className="ink hair" />
        <text x="90" y="120" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>DEBOUNCE · CALIBRATE</text>
        <text x="90" y="134" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>DEADZONE · SMOOTH</text>
        <text x="90" y="148" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>STATE DIFF</text>
        <line x1="20" y1="164" x2="160" y2="164" className="ink hair" />
        <text x="90" y="184" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 10 }}>HID + CDC</text>
        <text x="90" y="200" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>tinyUSB stack</text>
      </g>

      {/* USB OUT */}
      <line x1="690" y1="240" x2="790" y2="240" className="ink" strokeWidth="1.5" />
      <polygon points="790,240 782,236 782,244" fill="var(--ink)" />

      {/* HOST */}
      <g transform="translate(800 180)">
        <rect x="0" y="0" width="160" height="120" className="ink" strokeWidth="1.25" />
        <line x1="0" y1="24" x2="160" y2="24" className="ink hair" />
        <text x="80" y="16" className="lbl fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 9 }}>GAME PC · UNITY</text>
        <text x="80" y="56" className="lbl-sm fill-only" stroke="none" textAnchor="middle">HID gamepad</text>
        <text x="80" y="72" className="lbl-sm fill-only" stroke="none" textAnchor="middle">HID mouse</text>
        <text x="80" y="88" className="lbl-sm fill-only" stroke="none" textAnchor="middle">CDC serial · LEDs</text>
        <text x="80" y="106" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 7, fill: 'var(--ink-faint)' }}>Unity Input System</text>
      </g>

      {/* RETURN PATH — LED command → PWM → MOSFETS */}
      <g transform="translate(800 350)">
        <text x="0" y="0" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 8, fill: 'var(--gold)' }}>RETURN · LED COMMAND</text>
        <line x1="0" y1="10" x2="160" y2="10" className="gold hair" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="0,10 8,6 8,14" fill="var(--gold)" />
      </g>
      <path
        d="M 510 350 C 380 360 380 410 410 410"
        className="gold hair" strokeWidth="1.25" strokeDasharray="3 3"
      />
      <g transform="translate(410 390)">
        <rect x="0" y="0" width="120" height="60" className="ink" strokeWidth="1.25" />
        <text x="60" y="20" className="lbl-sm fill-only" stroke="none" textAnchor="middle">Q1..Q10</text>
        <text x="60" y="36" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8 }}>N-MOSFET · PWM</text>
        <text x="60" y="50" className="lbl-sm fill-only" stroke="none" textAnchor="middle" style={{ fontSize: 8, fill: 'var(--gold)' }}>SINK · OUT0..9</text>
      </g>
      <line x1="530" y1="420" x2="600" y2="420" className="gold" strokeWidth="1.5" />
      <polygon points="600,420 592,416 592,424" fill="var(--gold)" />
      <text x="630" y="424" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>CABINET LAMPS · BUTTON LEDS</text>

      {/* timing badge */}
      <g transform="translate(1010 60)" className="ink hair">
        <rect x="0" y="0" width="170" height="80" />
        <line x1="0" y1="20" x2="170" y2="20" />
        <text x="8" y="14" className="lbl fill-only" stroke="none" style={{ fontSize: 9 }}>TIMING · 1 ms LOOP</text>
        <text x="8" y="40" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>SAMPLE 1000 Hz</text>
        <text x="8" y="55" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>REPORT on CHANGE</text>
        <text x="8" y="70" className="lbl-sm fill-only" stroke="none" style={{ fontSize: 9 }}>LATENCY &lt; 2 ms</text>
      </g>
    </svg>
  );
}

function ProtocolDiagram() {
  return (
    <pre className="loop-pre" style={{ marginTop: 14 }}>
{`> AIO?
< AIO v0.1 OK · 32D 8A 4S 10L
> LED 0 255            ; full brightness
> LED 1 080            ; ≈ 31 %
> PULSE 3 250          ; pulse channel 3, 250 ms
> MODE ATTRACT 1       ; cabinet attract
< OK`}
    </pre>
  );
}

/* --- §06 BOM ------------------------------------------------- */
const BOM = [
  ['Raspberry Pi Pico H', '1', '$5.00', 'Headers + debug pre-soldered. Cheaper than bare RP2040 for v0.1.'],
  ['74HC165 shift registers', '4 (or 6)', '$3.75–$5.70', '32-input default. Add two for 48-input variant.'],
  ['MCP3208 ADC', '1 (or 2)', '$2.10–$2.80', '8-ch · 12-bit. Second footprint for 16-ch builds.'],
  ['Logic-level N-MOSFET', '10', '$0.50–$3.00', 'AO3400A-class. Low-side LED sinks.'],
  ['Passives · pull-ups, caps, filters', 'lot', '$2.00–$6.00', 'Input pull-ups, gate resistors, ADC filtering, decoupling.'],
  ['Power protection', '1 set', '$1.50–$4.00', 'Fuse / polyfuse, reverse protection, bulk cap, status LEDs.'],
  ['PCB fabrication', '1', '$2.00–$8.00', 'Five-board prototype deals are common.'],
  ['PCB assembly', 'opt.', '$2.00–$8.00', 'Amortised if SMT assembled; THT terminals often hand-installed.'],
  ['Connectors / terminals', 'many', '$6.00–$25.00+', 'Biggest swing item. Pluggable name-brand raises cost fast.']
];

function BOMSection() {
  return (
    <section id="bom" data-screen-label="06 BOM">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 06</span>
          <span className="ttl">Bill of Materials · board-side</span>
          <span className="meta">Excludes joysticks, buttons, spinners</span>
        </div>
        <hr className="rule" />

        <div className="cap-head">
          <div>
            <span className="eyebrow">§ 06 · BOM</span>
            <h2 style={{ marginTop: 14 }}>
              Connectors dominate.<br/>
              Don't over-optimise the MCU.
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            What follows is the board-side BOM only — chips, transistors, passives, protection, PCB, terminals. Controls themselves (joysticks, buttons, spinners) are intentionally excluded; they belong to the cabinet, not the carrier.
          </p>
        </div>

        <div className="bom-grid" style={{ marginTop: 36 }}>
          <table className="spec bom-table">
            <thead>
              <tr>
                <th style={{ width: '34%' }}>Subsystem</th>
                <th style={{ width: '12%' }}>Qty</th>
                <th style={{ width: '18%' }}>Prototype cost</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {BOM.map((row, i) => (
                <tr key={i}>
                  <td className="val">{row[0]}</td>
                  <td className="label numerals">{row[1]}</td>
                  <td className="val numerals" style={{ color: 'var(--vermilion)' }}>{row[2]}</td>
                  <td className="val" style={{ color: 'var(--ink-soft)' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <aside className="target-card">
            <span className="eyebrow">Target</span>
            <h3 style={{ marginTop: 8 }}>Realistic board-side</h3>
            <div className="big-num">
              <span className="numerals">$35–55</span>
              <span className="big-num-sub">per populated board · small batch · Pico H · screw terminals</span>
            </div>

            <hr className="rule" style={{ margin: '20px 0' }} />
            <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>COST TRAP</span>
            <p className="body" style={{ fontSize: 13, marginTop: 6 }}>
              Connectors are the biggest swing item. The MCU is already cheap. Decide how cabinets will be wired before you spend hours shaving cents off the MCU side.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* --- §07 BUILD SEQUENCE ------------------------------------ */
const PASSES = [
  {
    id: 'A', title: 'Bench prototype',
    body: 'Wire a Pico H, one MCP3208, four 74HC165s, a few MOSFET outputs, one spinner, one Hall joystick or pot, and a handful of switches on a breadboard or perfboard. The goal is to prove the firmware loop, not the PCB.',
    deliverable: 'Working HID + CDC composite on a breadboard'
  },
  {
    id: 'B', title: 'Cabinet-real test',
    body: 'Move the prototype into a cabinet-like wiring environment. Test long runs, power-supply noise, USB reconnects, Unity restarts, and fast spinner motion. Read every label at arm\'s length under low light.',
    deliverable: 'No mis-reads on long cabinet looms · stable through reboots'
  },
  {
    id: 'C', title: 'Pico carrier PCB',
    body: 'Lay out the v0.1 carrier board around the Pico H module. Keep BOOTSEL/RUN accessible, add readable silkscreen, include test pads for every bus, and route grounds with the star point near J_LED_POWER.',
    deliverable: 'Two stuffed boards, one in a cabinet, one on the bench'
  }
];

const DONTS = [
  'Do not integrate the bare RP2040 until the carrier has survived real cabinets.',
  'Do not make the first LED system RGB-heavy unless a cabinet actually needs it.',
  'Do not use a button matrix for cabinet controls; shift registers avoid ghosting.',
  'Do not assume every Hall joystick output is 3.3V-safe — protect or divide 5V outputs.',
  'Do not over-invest in a GUI configurator before the pinout and protocol stabilise.',
  'Do not make terminal labels tiny. Field-wiring readability is a real feature.'
];

function BuildSection() {
  return (
    <section id="build" data-screen-label="07 Build sequence">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 07</span>
          <span className="ttl">Build Sequence · three passes</span>
          <span className="meta">Bench · Cabinet · PCB</span>
        </div>
        <hr className="rule" />

        <div className="cap-head">
          <div>
            <span className="eyebrow">§ 07 · Build sequence</span>
            <h2 style={{ marginTop: 14 }}>
              Three passes,<br/>
              in order, no shortcuts.
            </h2>
          </div>
          <p className="body" style={{ alignSelf: 'end' }}>
            The carrier earns its v0.1 stamp only after Pass C. Each pass is a graduation — failing one means you do not start the next. The boring cabinet-real test in the middle is where most surprises hide.
          </p>
        </div>

        <div className="passes" style={{ marginTop: 36 }}>
          {PASSES.map((p, i) => (
            <div key={p.id} className="pass-card">
              <div className="pass-head">
                <div className="pass-id">
                  <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>PASS</span>
                  <span className="pass-letter">{p.id}</span>
                </div>
                <h3>{p.title}</h3>
                {i < PASSES.length - 1 && <span className="pass-arrow">→</span>}
              </div>
              <p className="body" style={{ marginTop: 14 }}>{p.body}</p>
              <hr className="rule" style={{ margin: '14px 0' }} />
              <span className="mono-xs" style={{ color: 'var(--vermilion)' }}>DELIVERABLE</span>
              <p className="body" style={{ fontSize: 13, marginTop: 6 }}>{p.deliverable}</p>
            </div>
          ))}
        </div>

        <hr className="rule" style={{ marginTop: 48 }} />

        <div className="donts" style={{ marginTop: 32 }}>
          <div>
            <span className="eyebrow">Cautions</span>
            <h3 style={{ marginTop: 8, fontSize: 24 }}>Do not do these yet</h3>
            <p className="body" style={{ fontSize: 14, marginTop: 12, maxWidth: '36ch' }}>
              Six anti-patterns the prototype stream specifically wants to avoid. They are listed not because they are wrong forever — they are wrong <em>now</em>.
            </p>
          </div>
          <ul className="k-list" style={{ marginTop: 0 }}>
            {DONTS.map((d, i) => (
              <li key={i}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --- §08 COLOPHON / SOURCES -------------------------------- */
const SOURCES = [
  ['Raspberry Pi Pico documentation', 'GPIO · ADC · PWM · USB · PIO', 'https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html'],
  ['Raspberry Pi Pico H launch note', 'Pre-soldered headers · debug', 'https://www.raspberrypi.com/news/raspberry-pi-pico-w-your-6-iot-platform/'],
  ['Texas Instruments SN74HC165', 'Parallel-in serial-out · 8 bit', 'https://www.ti.com/product/SN74HC165'],
  ['Microchip MCP3208', '12-bit SPI ADC · 8 channels', 'https://www.microchip.com/en-us/product/mcp3208'],
  ['Ultimarc SpinTrak', 'Quadrature spinner reference', 'https://www.ultimarc.com/trackballs-and-spinners/spinners/spintrak/'],
  ['DigiKey SN74HC165N', 'Pricing reference', 'https://www.digikey.com/en/products/detail/texas-instruments/SN74HC165N/376966'],
  ['DigiKey MCP3208-CI/SL', 'Pricing reference', 'https://www.digikey.com/en/products/detail/microchip-technology/MCP3208-CI-SL/305929'],
  ['LCSC AO3400A', 'MOSFET pricing reference', 'https://www.lcsc.com/product-detail/C20917.html'],
  ['JLCPCB assembly', 'PCBA pricing reference', 'https://jlcpcb.com/help/article/pcb-assembly-price'],
  ['JLCPCB prototype', 'PCB fabrication pricing', 'https://jlcpcb.com/'],
  ['LCSC 5.08mm terminals', 'Connector pricing reference', 'https://www.lcsc.com/product-detail/C474952.html'],
  ['Unity Input System', 'HID device support', 'https://docs.unity3d.com/Packages/com.unity.inputsystem%401.0/manual/HID.html']
];

function Colophon() {
  return (
    <section id="colophon" data-screen-label="08 Sources">
      <div className="wrap">
        <div className="folio">
          <span className="num">PLATE 08</span>
          <span className="ttl">Sources · Colophon · Assumptions</span>
          <span className="meta">All prices indicative, USD, 2026</span>
        </div>
        <hr className="rule" />

        <div className="colophon-grid">
          <div>
            <span className="eyebrow">§ 08 · Colophon</span>
            <h2 style={{ marginTop: 14 }}>
              How this<br/>
              field guide was built.
            </h2>
            <p className="body" style={{ marginTop: 18, maxWidth: '46ch' }}>
              Part prices are rough USD snapshots for prototype planning and can change with supplier, package, quantity, shipping, and availability. Controls themselves — joysticks, buttons, spinners — are excluded from the BOM; they belong to the cabinet, not the carrier.
            </p>
            <p className="body" style={{ marginTop: 12, maxWidth: '46ch' }}>
              The drawings on these eight plates are <em>indicative, not manufacturing-grade</em>. They aim to make the cabinet wirer's job legible at arm's length.
            </p>

            <div className="meta-block" style={{ marginTop: 28 }}>
              <table className="spec">
                <tbody>
                  <tr><td className="label">Document</td><td className="val">AIO-PC-001</td></tr>
                  <tr><td className="label">Revision</td><td className="val">A · May 2026</td></tr>
                  <tr><td className="label">Specimen</td><td className="val">001 of 004 · Prototype Stream</td></tr>
                  <tr><td className="label">Type</td><td className="val">Space Grotesk · IBM Plex Mono · Newsreader</td></tr>
                  <tr><td className="label">Inks</td><td className="val"><span className="dot ink"></span>ink <span className="dot verm" style={{ marginLeft: 12 }}></span>vermilion <span className="dot blue" style={{ marginLeft: 12 }}></span>ink-blue <span className="dot gold" style={{ marginLeft: 12 }}></span>gold</td></tr>
                  <tr><td className="label">Filed</td><td className="val">Indie Arcade Commons</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <span className="eyebrow">Sources</span>
            <h3 style={{ marginTop: 8, fontSize: 22 }}>Cited references</h3>
            <ul className="source-list" style={{ marginTop: 16 }}>
              {SOURCES.map((s, i) => (
                <li key={i}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <a href={s[2]} target="_blank" rel="noopener noreferrer">
                    <span className="s-title">{s[0]}</span>
                    <span className="s-sub">{s[1]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="rule" style={{ marginTop: 56 }} />
        <div className="endmark">
          <div className="endmark-bar"></div>
          <div className="endmark-text">
            End of guide.
            <span className="mono-xs" style={{ color: 'var(--ink-faint)' }}>AIO-PC-001 · REV A · MAY 2026 · 8 / 8</span>
          </div>
          <div className="endmark-bar"></div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MOUNT ALL SECTIONS
   ============================================================ */
function App() {
  return (
    <>
      <Variants />
      <Capacity />
      <Connectors />
      <SignalFlow />
      <BOMSection />
      <BuildSection />
      <Colophon />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('rest')).render(<App />);
