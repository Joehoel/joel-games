import React, { useState } from 'react';

export default function Pong() {
  const WIDTH = 600;
  const HEIGHT = 400;
  const FPS = 60;
  const PADDLE = {
    width: 20,
    height: 100,
  };

  const [started, setStarted] = useState(false);
  const [upArrowPressed, setUpArrowPressed] = useState(false);
  const [downArrowPressed, setDownArrowPressed] = useState(false);

  const [paddles, setPaddles] = useState([
    {
      x: 40,
      y: HEIGHT / 2 - PADDLE.height / 2,
      score: 0,
    },
    {
      x: WIDTH - PADDLE.width,
      y: HEIGHT / 2 - PADDLE.height / 2,
      score: 0,
    },
  ]);

  const [ball, setBall] = useState({
    x: 300,
    y: 200,
    radius: 7,
    speed: 7,
    velocity: {
      x: 5,
      y: 5,
    },
  });

  const start = () => {
    setStarted(true);
    update();
  };

  const update = () => {
    setInterval(() => {
      const [user, ai] = paddles;
      const player = ball.x < WIDTH / 2 ? user : ai;
      if (upArrowPressed && user.y > 0) {
        // user.y -= 8;
        setPaddles((paddles) => {
          return [
            {
              ...paddles[0],
              y: (paddles[0].y += 8),
            },
            {
              ...paddles[1],
            },
          ];
        });
      } else if (downArrowPressed && user.y < HEIGHT - PADDLE.height) {
        setPaddles((paddles) => {
          return [
            {
              ...paddles[0],
              y: (paddles[0].y += 8),
            },
            {
              ...paddles[1],
            },
          ];
        });
      }

      // ball.x += ball.velocity.x;
      // ball.y += ball.velocity.y;
      setBall((ball) => {
        return {
          ...ball,
          x: (ball.x += ball.velocity.x),
          y: (ball.y += ball.velocity.y),
        };
      });

      // ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.09;
      setPaddles((paddles) => {
        return [
          { ...paddles[0] },
          {
            ...paddles[1],
            y: (paddles[1].y += (ball.y - (ai.y + PADDLE.height / 2)) * 0.09),
          },
        ];
      });

      if (ball.y <= 0 || ball.y + ball.radius >= HEIGHT) {
        // ball.velocity.y *= -1;
        setBall((ball) => {
          return {
            ...ball,
            velocity: {
              ...ball.velocity,
              y: (ball.velocity.y *= -1),
            },
          };
        });
      }

      if (ball.x + ball.radius >= WIDTH) {
        // user.score += 1;
        setPaddles((paddles) => {
          return [
            { ...paddles[0], score: (paddles[0].score += 1) },
            {
              ...paddles[1],
            },
          ];
        });
        // reset();
      }

      if (ball.x - ball.radius <= 0) {
        // ai.score += 1;
        setPaddles((paddles) => {
          return [
            { ...paddles[0] },
            {
              ...paddles[1],
              score: (paddles[1].score += 1),
            },
          ];
        });
        // reset();
      }

      // if (collisionDetect(player, ball)) {
      //   let angle = 0;
      //   if (ball.y < player.y + player.height / 2) {
      //     // then -1 * Math.PI / 4 = -45deg
      //     angle = (-1 * Math.PI) / 4;
      //   } else if (ball.y > player.y + player.height / 2) {
      //     // if it hit the bottom of paddle
      //     // then angle will be Math.PI / 4 = 45deg
      //     angle = Math.PI / 4;
      //   }
      //   ball.velocity.x =
      //     (player === user ? 1 : -1) * ball.speed * Math.cos(angle);
      //   ball.velocity.y = ball.speed * Math.sin(angle);
      //   ball.speed += 0.2;
      // }
    }, 1000 / FPS);
  };

  return (
    <div className="pong">
      <div className="pong-container">
        <svg width={WIDTH} height={HEIGHT} viewBox={`0 0  `}>
          <rect width={WIDTH} height={HEIGHT} fill="#181818" />
          <line
            x1={WIDTH / 2}
            y1="0"
            x2={WIDTH / 2}
            y2={HEIGHT}
            stroke="#fff"
            strokeWidth="5"
            strokeDasharray="16"
          />
          {paddles?.map((paddle, index) => (
            <rect
              key={`paddle-`}
              transform={`translate(${paddle.x - PADDLE.width}, ${paddle.y})`}
              width={PADDLE.width}
              height={PADDLE.height}
              fill="#fff"
              className="paddle"
            />
          ))}
          <circle
            fill="#fff"
            cx="0"
            cy="0"
            transform={`translate(${ball.x}, ${ball.y})`}
            r={ball.radius}
            className="ball"
          />
        </svg>
      </div>
      <button onClick={start}>Start</button>
    </div>
  );
}
