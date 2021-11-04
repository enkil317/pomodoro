import React from "react";
import { minutesToDuration } from "../utils/duration";
export default function FocusBreakDurations({focusDuration, handleDecreaseFocus, handleDecreaseBreak, handleIncreaseFocus, handleIncreaseBreak, breakDuration}) {
return (
    <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* DONE: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}            
              </span>
            <div className="input-group-append">
              {/* DONE?: Implement decreasing focus duration and disable during a focus or break session added onClick */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={handleDecreaseFocus}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={handleIncreaseFocus}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={handleDecreaseBreak}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={handleIncreaseBreak}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}