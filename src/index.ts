/**
 * ValidateExec — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { ValidationEngineOrchestrator } from "@webwaka/organelle-validation-engine";
import { SchedulerExecutorOrchestrator } from "@webwaka/organelle-scheduler-executor";

export { ValidationEngineOrchestrator } from '@webwaka/organelle-validation-engine';
export { SchedulerExecutorOrchestrator } from '@webwaka/organelle-scheduler-executor';

/**
 * ValidateExec Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class ValidateExecComposition {
  private validationEngineOrchestrator: ValidationEngineOrchestrator;
  private schedulerExecutorOrchestrator: SchedulerExecutorOrchestrator;

  constructor() {
    this.validationEngineOrchestrator = new ValidationEngineOrchestrator();
    this.schedulerExecutorOrchestrator = new SchedulerExecutorOrchestrator();
  }
}

export * from "./types";
