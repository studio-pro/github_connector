import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './test_1';
import { AppModule } from './test_2';

/**
 * Comprehensive Test Suite for HelloController and AppModule
 *
 * This test suite demonstrates both unit testing and integration testing
 * approaches in NestJS. It covers the HelloController in isolation and
 * as part of the AppModule, ensuring robust functionality and proper
 * module configuration.
 *
 * @module TestSuite
 */

describe('HelloController (Unit)', () => {
  let controller: HelloController;

  beforeEach(async () => {
    controller = new HelloController();
  });

  /**
   * Unit test for HelloController's getHello method
   * Verifies the correct response without dependencies
   */
  it('should return "Hello World!"', () => {
    expect(controller.getHello()).toBe('Hello World!');
  });
});

describe('HelloController (Integration)', () => {
  let app: TestingModule;
  let helloController: HelloController;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  /**
   * Integration test for HelloController within AppModule
   * Ensures proper instantiation and functionality in the module context
   */
  it('should return "Hello World!" from controller in AppModule', () => {
    expect(helloController.getHello()).toBe('Hello World!');
  });
});

describe('AppModule', () => {
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  /**
   * Structural test for AppModule
   * Verifies that HelloController is properly included in the module
   */
  it('should have HelloController', () => {
    const controller = app.get<HelloController>(HelloController);
    expect(controller).toBeDefined();
  });
});

/**
 * Advanced Testing Concepts:
 * 
 * 1. Mocking: In more complex scenarios, you might want to mock dependencies
 *    or external services to isolate the unit under test.
 * 
 * 2. E2E Testing: For full end-to-end testing, consider using NestJS's 
 *    built-in E2E testing utilities with Supertest.
 * 
 * 3. Code Coverage: Implement Jest's coverage reporting to ensure
 *    comprehensive test coverage across your application.
 * 
 * 4. Continuous Integration: Integrate these tests into your CI/CD pipeline
 *    for automated testing on each commit or pull request.
 */